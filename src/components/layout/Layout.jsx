//전체화면 레이아웃
import "./style.css";

//header,form, list들을 children으로 받기 때문에 props로 받아야쥐!!
function Layout(props) {
  return (
    <div className="layout">{props.children}
    </div>
  );
}

export default Layout;
