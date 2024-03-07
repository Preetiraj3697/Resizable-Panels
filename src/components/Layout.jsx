
import './Layout.css'
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import Image1 from '../image/Image1.jpeg';
import Image2 from '../image/Image2.jpg';
import Image3 from '../image/Image3.jpg'
import ChildContainer from './ChildContainer';
const Layout = () => {

  return (
    <div className="container">
    <PanelGroup direction="vertical">
       <Panel>
         <PanelGroup direction="horizontal" className='hori'>
            <Panel defaultSize={20} minSize={20} maxSize={75} >
              <ChildContainer number={1} name="child1" />
           </Panel>
           <PanelResizeHandle />
           <Panel defaultSize={50} minSize={20}  maxSize={75}>
           <ChildContainer number={2} name="child2" />
           </Panel>
         </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={40} minSize={20}  maxSize={75}>
        <ChildContainer number={3} name="child3" />
       </Panel>
     </PanelGroup>
      
    </div>
  );
};

export default Layout;
