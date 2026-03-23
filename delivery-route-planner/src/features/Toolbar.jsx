import "./Toolbar.css"
import IconBtn from "../components/IconBtn";

function Toolbar() {
    return (
        <div className="toolbar-panel">
            <IconBtn icon="🚨"/>
            <IconBtn icon="🌞"/>
            <IconBtn icon="🌚"/>
            <IconBtn icon=".  R  ."/>
            <IconBtn icon="..de.."/>
            <IconBtn icon=".  D  ."/>
            <IconBtn icon="..en.."/>
            <IconBtn icon=" abre -&gt; "/>
            <IconBtn icon="✔️"/>
            <IconBtn icon="⏰"/>
            <input type="time" />
            <IconBtn icon="🗑️"/>
        </div>
    )
}

export default Toolbar;