import { createSuspenseApi } from '$api/http'
import Friends from '$slice/Friends'
import { Outlet } from 'react-router-dom'
import css from './index.module.scss'
import Sidebar from './Sidebar'

const useDataApi = createSuspenseApi()

const index = () => {
  useDataApi(
    ['get', '/friends'],
    /* ['get', '/groups'], */
    ([{ data: friends } /* { data: groups } */]) => {
      friends && $store(Friends.init(friends))
    }
  )

  return (
    <div className={css.Dashboard}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>

      <div className={css.main}>
        <Outlet />
      </div>
    </div>
  )
}

export default index
