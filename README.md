# SillyRouter

This is just silly.

Seriously. Don't even look at this silly React router.

Matched route components have a new prop.
- `route`
  - `name`: Name of the matched route
  - `path`: Matched path
  - `params`: Matched route parameters

A route with `path` undefined matches all requests.

```js
import { Router } from 'sillyrouter';

import Home from './components/Home.js';
import AboutUser from './components/AboutUser.js';
import NotFound from './component/NotFound.js';

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'aboutUser', path: '/user/:userId', component AboutUser},
  {name: 404, component: NotFound},
];

ReactDOM.render(
  <Router routes={routes}/>
  document.getElementById('root')
);
```

```js
import { Link, navigate } from 'sillyrouter';

class Home extends React.PureComponent {
  aboutFirstUser = () => {
    navigate('aboutUser', {userId: 1});
  }

  render() {
    return (
      <div>
        <Link to="aboutUser" userId={1}>About our first user</Link>
        <button onClick={aboutFirstUser}>About our first user</button>
      </div>
    );
  }
}

export default Home;
```

```js
class AboutUser extends React.PureComponent {
  render() {
    return (
      <div>
        User ID: {this.props.route.params.userId}
      </div>
    );
  }
}

export default AboutUser;
```
