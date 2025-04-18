import React from 'react'
import { useState, useMemo } from 'react'
const nums = new Array(30_000_000).fill(0).map((_,i)=>{
    return{
        index: i,
        isMagical: i===29_000_000
    }
})
const Memo = () => {
    const [numbers, setNumbers] = useState(nums)
    //const magical = numbers.find(item=>item.isMagical===true)       //Very expensive computation

    /*useMemo hook 
    computation is performed once then saved i.e memoized, it is re-performed only when there is any change in the second arguement which is the number array*/
    const magical = useMemo(()=>numbers.find(item=>item.isMagical===true),[numbers])
    
  return (
    <div>
      <span>Magical number is {magical.index}</span>
    </div>
  )
}

export default Memo
