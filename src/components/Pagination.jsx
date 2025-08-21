import React from 'react'

export const Pagination= ({productperPage,totalProduct,setcurrentPage,currentpage}) => {

   let pages=[]
    for(let i=1;i<=Math.ceil(totalProduct/productperPage);i++){
      pages.push(i)
    }

    const handlePrev=()=>{
        if(currentpage>1){
            setcurrentPage(currentpage-1)

        }
    }
    const handleNext=()=>{
        if(currentpage<pages.length){
            setcurrentPage(currentpage+1)
        }
    }
  return (
    <div >
        
        {pages.length>0 &&<div className='my-4'>
            {
                pages.map(page=>(
                    <button key={page} onClick={()=>setcurrentPage(page)} className={`p-2 mx-1 px-5 bg-gray-500 text-white rounded shadow-md hover:shadow-[0_3px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-[800ms] ${currentpage==page ? 'active':''} `}>{page}</button>
                    
                ))
            }
          </div>}
          <div className='flex justify-center'>


            <button  className='p-2 mx-2 px-5 bg-red-300 text-white rounded shadow-md hover:shadow-[0_3px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-[800ms] 'onClick={handlePrev} hidden={currentpage==1}>Prev..</button>
            <button   className={`p-2 mx-2 px-5 bg-rose-500 text-white rounded shadow-md hover:shadow-[0_3px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-[800ms] `} onClick={handleNext} hidden={currentpage==pages.length} >Next</button>
          </div>
    </div>
  )
}
