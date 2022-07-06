export default function ArrowIcon(props) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-chevron-down ${props.rotate ? '' : 'rotate'}`}
      width={22}
      height={22}
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
