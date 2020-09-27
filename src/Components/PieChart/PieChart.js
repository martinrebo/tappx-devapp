import React, { useContext, useState, useEffect } from 'react'
import { store } from '../../store/store'
// import styles from './PieChart.css'
import './PieChart.css'


export default function PieChart({ devs }) {

  const globalState = useContext(store);
  // const { dispatch } = globalState;

  const [gender, setGender] = useState({ males: 0, females: 0 })

  useEffect(() => {
    let total = devs.length
    let males = devs.filter(x => x.gender === "male").length;
    let females = devs.filter(x => x.gender === "female").length;
    // let genderPercentage = ((females)/total)*100
    setGender({ males: ((males) / total) * 100, females: ((females) / total) * 100 })
    console.log(males, females)
  }, [devs])

  console.log(gender)

  return (
    <div className="grid-piechart">
      <div className="chart"
        style={{
          background:
            `conic-gradient( 
                 #5DA5DA 0 ${gender.males}%, 
                  #4D4D4D 0 ${gender.males}%,
                   #B276B2 0 )`}} ></div>

      <ul className="key">
        <li>
          <strong className="percent purple">{Math.floor(gender.females)} %</strong>
          <span className="choice">Female</span>
        </li>
        <li>
          <strong className="percent blue">{Math.floor(gender.males)} %</strong>
          <span className="choice">Male</span>
        </li>

        <li>
          <strong className="percent gray"> Other {}%</strong>
          <span className="choice">N/A</span>
        </li>

      </ul>
    </div>
  )
}
