'use client'

import tw, { styled } from 'twin.macro'

export const BookWrapper = tw.div`
  fixed
  top-0
  left-0
  w-screen
  h-[calc(var(--dvh) * 100)]
  z-[998]

  opacity-0
  [visibility: hidden]
`
export const ScreenOverlay = styled.div`
  --blur: 0px;

  ${tw`
    absolute
    top-0
    left-0
    w-full
    h-full
    z-[1]
    bg-opacity-30
    bg-white
    backdrop-blur-[var(--blur)]
  `}
`
export const SideBar = tw.aside`
  absolute
  top-0
  right-0
  w-full
  h-full
  px-md
  py-lg
  bg-white
  overflow-y-scroll
  z-[2]

  sm:py-md
  sm:w-[60vw]
  md:w-[50vw]
  lg:w-[45vw]
  xl:px-md-xl
  xl:py-md-xl
`
export const TitleLine = styled.div`
  ${tw`flex justify-between items-center`}
  ${tw`mb-md xl:mb-md-xl`}

  svg {
    ${tw`w-sm h-sm cursor-pointer`}
  }
`
export const FormWrapper = tw.form`
  flex
  flex-col
  gap-sm
  mt-lg

  xl:mt-lg-xl
  xl:gap-sm-xl
`
export const Split = tw.div`
  flex
  gap-xs

  xl:gap-xs-xl
`
export const Question = styled.div`
  ${tw`
    flex
    flex-col
    gap-xxs
    w-full
  
    xl:gap-xxs-xl
  `}

  span {
    ${tw`text-red text-p font-sans xl:text-p-xl`}
  }
`
export const InputLabel = tw.label`
  text-p
  font-sans
  xl:text-p-xl
`
export const Input = tw.input`
  w-full
  px-xs
  py-xxs
  bg-white
  border
  border-solid
  border-gray
  [border-radius: 10px]
  focus:outline-none
  focus:border-blue

  text-p
  font-sans
  xl:text-p-xl
  
  xl:px-xs-xl
  xl:py-xxs-xl
`
export const TextArea = tw.textarea`
  w-full
  px-xs
  py-xxs
  bg-white
  border
  border-solid
  border-gray
  [border-radius: 10px]
  focus:outline-none
  focus:border-blue

  text-p
  font-sans
  xl:text-p-xl
  
  xl:px-xs-xl
  xl:py-xxs-xl
`
export const SubmitWrapper = styled.div`
  ${tw`flex flex-col gap-sm xl:gap-sm-xl`}
  ${tw`mt-lg xl:mt-lg-xl`}

  .call-button {
    ${tw`text-blue`}
  }

  .submit {
    ${tw`w-full`}
  }
`
