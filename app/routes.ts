import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes'

export default [
  layout('layouts/index.tsx', [
    index('routes/home.tsx'),
    route('about', 'routes/about.tsx'),
    layout('layouts/tools.tsx', [
      route('tools', 'routes/tools.tsx', [
        index('routes/tools/index.tsx'),
        route('test', 'routes/tools/test.tsx'),
      ]),
    ]),
  ]),
] satisfies RouteConfig
