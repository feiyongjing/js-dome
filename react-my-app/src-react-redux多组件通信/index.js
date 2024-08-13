import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store' // 自己创建的redux核心对象store
import { Provider } from 'react-redux' // 引入Provider组件

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider组件用于监听内部所有组件和后代组件，检测有哪些容器组件需要store，会将全局管理的store传递给需要的容器组件
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 不用手动监听redux下store中的数据了，react-redux会在容器组件通过连接store对象连接redux时中自动进行监听数据修改和渲染
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// })

reportWebVitals();