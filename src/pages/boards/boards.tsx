import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/shared/model/routes'
import { rqClient } from '@/shared/api/instance'

const Boards = () => {
  const { data } = rqClient.useQuery('get', '/boards')

  return (
    <>
      <h2>Boards List</h2>
      {data?.map(({ id, name }) => (
        <Link
          key={id}
          to={ROUTES.BOARD}
          params={{ boardId: id }}
        >
          {name}
        </Link>
      ))}
    </>
  )
}

export default Boards
