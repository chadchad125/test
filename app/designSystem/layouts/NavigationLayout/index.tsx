// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/services',
      label: 'Services',
      position: 'topbar',

      onClick: () => goTo('/services'),
    },

    {
      key: '/gallery',
      label: 'Gallery',
      position: 'topbar',

      onClick: () => goTo('/gallery'),
    },

    {
      key: '/appointments/new',
      label: 'Appointment Booking',
      position: 'topbar',

      onClick: () => goTo('/appointments/new'),
    },

    {
      key: '/about-us',
      label: 'About Us',
      position: 'topbar',

      onClick: () => goTo('/about-us'),
    },

    {
      key: '/faq',
      label: 'FAQ',
      position: 'topbar',

      onClick: () => goTo('/faq'),
    },

    {
      key: '/contact-us',
      label: 'Contact Us',
      position: 'topbar',

      onClick: () => goTo('/contact-us'),
    },

    {
      key: '/my-account',
      label: 'My Account',
      position: 'topbar',

      onClick: () => goTo('/my-account'),
    },

    {
      key: '/admin/appointments',
      label: 'Admin Appointments Calendar',
      position: 'topbar',

      onClick: () => goTo('/admin/appointments'),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
