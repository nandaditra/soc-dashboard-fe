const formatTime = require('../../../../helpers/formatTime')

type TimeData = {
    time:string
}

interface DataSelProps {
    time: TimeData,
    onFormatTime: () => void
}

export default function DataSel({
    time, 
}:
DataSelProps
) {
    return <td className="py-2 text-gray-500 text-sm">{formatTime(time)}</td>
}