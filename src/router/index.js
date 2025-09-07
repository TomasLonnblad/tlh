import { createBrowserRouter } from 'react-router';

import Layout from '../Layout';
import Home from '../views/Home';
import Scroll from '../views/Scroll';
import Layers from '../views/Layers';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'scroll', Component: Scroll },
      { path: 'layers', Component: Layers },
    ],
  },
]);

export default router;
