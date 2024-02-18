import Design1 from "./design1"
const PageHeader = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const {heading , subheading}= props
    return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
    <h1 className="font-bold text-2xl sm:text-4xl uppercase">{heading}</h1>
    <Design1 />
    <p className="mx-0 sm:mx-10 text-center text-md sm:text-xl text-gray-500">
     {subheading}
    </p>
  </div>
  )
}

export default PageHeader