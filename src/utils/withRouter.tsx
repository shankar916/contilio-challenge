import { useNavigate, useLocation, useParams } from 'react-router-dom';

export function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    return <Component {...props} router={{ navigate, location, params }} />;
  }

  return ComponentWithRouterProp;
}