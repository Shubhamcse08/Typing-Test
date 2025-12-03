import Display from "../components/Display"
import TypingBox from "../components/TypingBox"


const MainWindow = () => {
  
  return (
    <div className="p-10 flex flex-col gap-6 ">
      <Display/>
      <TypingBox/>
    </div>
  )
}

export default MainWindow