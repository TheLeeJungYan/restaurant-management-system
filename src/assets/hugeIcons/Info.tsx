import { hugeIconProps } from "../../Types/type"
const Info:React.FC<hugeIconProps> = ({size,color})=>{
    return (
        <svg width={size} height={size}viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM11 6.5V8H13V6.5H11ZM10 11H11V17H13V9H10V11Z" />
        </svg>
    )
}
export default Info;