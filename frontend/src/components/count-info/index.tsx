import { Link } from "react-router-dom"
import s from "./index.module.scss"

type Props = {
  count: number
  title: string
}

export const CountInfo: React.FC<Props> = ({ count, title }) => {
  return (
    <Link
      to={title === "Following" ? "/following" : "/followers"}
      className={s.countInfo}
    >
      <p>{count}</p>
      <div>{title}</div>
    </Link>
  )
}
