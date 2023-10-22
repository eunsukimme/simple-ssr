import { hydrateRoot } from 'react-dom/client'
import { Counter } from './components/Counter';

const dom = document.getElementById('root');
// 이미 렌더링 된 채로 서버에서 내려오기 때문에
// 브라우저에서 실행될 자바스크립트는 이벤트 핸들러를 부착해주는 hydration 과정만 필요하다
hydrateRoot(dom, <Counter />);