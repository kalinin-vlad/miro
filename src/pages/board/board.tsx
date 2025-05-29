import { Link, useParams } from '@tanstack/react-router'

const Board = () => {
  const { boardId } = useParams({ from: '/boards/$boardId' })

  return (
    <>
      <h2>Board Page</h2>
      <div>{`Board: ${boardId}`}</div>
      <Link to="..">return</Link>
    </>
  )
}

export default Board
