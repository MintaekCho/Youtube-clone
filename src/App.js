import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Video from "./page/Video";
import VideoDetails from "./page/VideoDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Video /> },
        { path: "/video", element: <Video /> },
        { path: "/video/:q", element: <Video /> },
        { path: "/video/watch/:id", element: <VideoDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
