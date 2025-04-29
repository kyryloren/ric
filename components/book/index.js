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
import CustomLink from 'components/link'
import CustomButton from 'components/button'
import { ModalContext } from 'lib'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const DESCRIPTION = `Leave your details below and a staff member
will get back to you in 1-2 business days.
`

export default function Book() {
  const sectionEl = useRef()
  const { modal, setModal } = useContext(ModalContext)
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      dob: '',
      email: '',
      phone: '',
      details: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { contextSafe } = useGSAP({
    dependencies: [sectionEl, modal],
    scope: sectionEl,
  })

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.set('.sidebar', {
        xPercent: 100,
      })

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
        onComplete: () => setModal(false),
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

        <FormWrapper onSubmit={formik.handleSubmit}>
          <Split>
            <Question className="anim-question">
              <InputLabel htmlFor="fname">Patient First Name</InputLabel>
              <Input
                id="fname"
                name="firstname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fname}
                placeholder="First Name"
              />
            </Question>
            <Question className="anim-question">
              <InputLabel htmlFor="lname">Patient Last Name</InputLabel>
              <Input
                id="lname"
                name="lastname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lname}
                placeholder="Last Name"
              />
            </Question>
          </Split>

          <Question className="anim-question">
            <InputLabel htmlFor="dob">Patient Date of Birth</InputLabel>
            <Input
              id="dob"
              name="birthday"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dob}
              placeholder="MM/DD/YYYY"
            />
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="email@domain.com"
            />
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="(XXX) XXX-XXXX"
            />
          </Question>

          <Question className="anim-question">
            <InputLabel htmlFor="details">Details</InputLabel>
            <TextArea
              id="details"
              name="details"
              onChange={formik.handleChange}
              value={formik.values.details}
              placeholder="Any details we should know about?"
            />
          </Question>

          <SubmitWrapper className="anim-question">
            <P>
              Need further assistance? Call{' '}
              <CustomLink href={'tel:7189480870'} className="call-button">
                (718) 948-0870
              </CustomLink>
            </P>
            <CustomButton $primary className="submit">
              Submit Form
            </CustomButton>
          </SubmitWrapper>
        </FormWrapper>
      </SideBar>
      <ScreenOverlay className="overlay" onClick={onClose} />
    </BookWrapper>
  )
}
