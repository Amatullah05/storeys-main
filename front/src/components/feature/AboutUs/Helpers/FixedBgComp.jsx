import Counter from "./Counter"
const FixedBgComp = () => {
  return (
    <>
        <div className="counter-fixed-layout">
            <h6 className="font-lg font-sans light">Storeys in numbers</h6>

            <h4 className="font-lg light w-80 fs-50">Storeys is the Brightest and Fastest growing Real Estate Brokerage Firm in Dubai.</h4>
        
            <Counter />
        </div>
    </>
  )
}
    // ${window.innerWidth > 767 ? "w-80 fs-70" : "w-50 fs-36"}`
export default FixedBgComp