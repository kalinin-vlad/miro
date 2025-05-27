import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/shared/model/routes'

const linkArr = [
  {
    id: 1,
    label: 'link-1',
  },
  {
    id: 2,
    label: 'link-2',
  },
  {
    id: 3,
    label: 'link-3',
  },
]

const Boards = () => {
  return (
    <>
      <h2>Boards List</h2>
      {linkArr.map(({ id, label }) => (
        <Link
          key={id}
          to={ROUTES.BOARD}
          params={{ boardId: label }}
        >
          {label}
        </Link>
      ))}
    </>
  )
}

export default Boards
