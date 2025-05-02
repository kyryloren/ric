'use client'

import { useContext, useRef } from 'react'
import { H1, P, splitText } from 'styles'
import {
  BookWrapper,
  FormWrapper,
  Input,
  InputLabel,
  Question,
  ScreenOverlay,
  SideBar,
  Split,
  SubmitWrapper,
  TextArea,
  TitleLine,
} from './styles'
import Icon from 'components/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CustomLink from 'components/link'
import CustomButton from 'components/button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ModalContext } from 'context'

gsap.registerPlugin(useGSAP)

const DESCRIPTION = `Leave your details below and a staff member
will get back to you in 1-2 business days.
`

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  const parts = []
  if (digits.length > 0)
    parts.push('(' + digits.slice(0, Math.min(3, digits.length)))
  if (digits.length >= 4)
    parts.push(') ' + digits.slice(3, Math.min(6, digits.length)))
  if (digits.length >= 7) parts.push('-' + digits.slice(6))
  return parts.join('')
}

const validationSchema = Yup.object({
  fname: Yup.string().required('First name is required'),
  lname: Yup.string().required('Last name is required'),
  dob: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^\(\d{3}\)\s\d{3}-\d{4}$/,
      'Phone must be in format (XXX) XXX-XXXX',
    )
    .required('Phone number is required'),
  details: Yup.string().required('Please provide any details'),
})

export default function Book() {
  const sectionEl = useRef()
  const { modal, setModal } = useContext(ModalContext)

  // 2. Hook up validationSchema to Formik
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      dob: '',
      email: '',
      phone: '',
      details: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { contextSafe } = useGSAP({
    dependencies: [sectionEl, modal],
    scope: sectionEl,
  })

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
    setFieldValue,
    dirty,
    isValid,
    isSubmitting,
  } = formik

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.set('.sidebar', { xPercent: 100 })

      if (modal) {
        tl.set(sectionEl.current, { autoAlpha: 1 }, 0)
          .to('.overlay', { '--blur': '4px', duration: 0.5 }, 0)
          .to('.sidebar', { xPercent: 0, duration: 0.5 }, 0.3)
          .from(
            gsap.utils.toArray('.anim-word'),
            {
              yPercent: 100,
              opacity: 0,
              duration: 1.5,
              stagger: 0.02,
            },
            0.75,
          )
          .from(
            gsap.utils.toArray('.anim-question'),
            {
              yPercent: 100,
              opacity: 0,
              duration: 1.5,
              stagger: 0.1,
            },
            1,
          )
      }
    },
    { dependencies: [sectionEl, modal], scope: sectionEl },
  )

  const onClose = contextSafe(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        onComplete: () => {
          setModal(false)
          resetForm()
        },
      },
    })

    tl.to('.sidebar', { xPercent: 100, duration: 0.5 }, 0)
      .to('.overlay', { '--blur': '0px', duration: 0.5 }, 0)
      .to(
        sectionEl.current,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        0,
      )
  })

  return (
    <BookWrapper ref={sectionEl}>
      <SideBar className="sidebar" id="modal">
        <TitleLine>
          <H1>{splitText(`Book Now`)}</H1>
          <button aria-label="Close" onClick={onClose}>
            <Icon name="close" />
          </button>
        </TitleLine>
        <P>{splitText(DESCRIPTION)}</P>

        <FormWrapper onSubmit={handleSubmit}>
          <Split>
            <Question className="anim-question">
              <InputLabel htmlFor="fname">Patient First Name</InputLabel>
              <Input
                id="fname"
                name="fname"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fname}
                placeholder="First Name"
              />
              {touched.fname && errors.fname && <span>{errors.fname}</span>}
            </Question>

            <Question className="anim-question">
              <InputLabel htmlFor="lname">Patient Last Name</InputLabel>
              <Input
                id="lname"
                name="lname"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lname}
                placeholder="Last Name"
              />
              {touched.lname && errors.lname && <span>{errors.lname}</span>}
            </Question>
          </Split>

          <Question className="anim-question">
            <InputLabel htmlFor="dob">Patient Date of Birth</InputLabel>
            <Input
              id="dob"
              name="dob"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />
            {touched.dob && errors.dob && <span>{errors.dob}</span>}
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email@domain.com"
            />
            {touched.email && errors.email && <span>{errors.email}</span>}
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="(XXX) XXX-XXXX"
              value={values.phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value)
                setFieldValue('phone', formatted)
              }}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && <span>{errors.phone}</span>}
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="details">Details</InputLabel>
            <TextArea
              id="details"
              name="details"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.details}
              placeholder="Any details we should know about?"
            />
            {touched.details && errors.details && <span>{errors.details}</span>}
          </Question>

          <SubmitWrapper className="anim-question">
            <P>
              Need further assistance? Call{' '}
              <CustomLink href={'tel:7189480870'} className="call-button">
                (718) 948-0870
              </CustomLink>
            </P>
            <CustomButton
              disabled={isSubmitting || !dirty || !isValid}
              type="submit"
              $primary
              className="submit"
            >
              Submit Form
            </CustomButton>
          </SubmitWrapper>
        </FormWrapper>
      </SideBar>
      <ScreenOverlay className="overlay" onClick={onClose} />
    </BookWrapper>
  )
}
