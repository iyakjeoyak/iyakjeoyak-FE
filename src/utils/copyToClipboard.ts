import { toast } from "react-toastify";

const copyToClipboard = (text:string, delay:number = 2000) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success("URL이 클립보드에 복사되었습니다.",{ autoClose: delay });
  }).catch(() => {
    toast.error("URL 복사에 실패했습니다.", { autoClose: delay });
  })

}

export default copyToClipboard;