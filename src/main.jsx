import React from 'react';

// const data = [
//     { month: "Nov", day: 17, time: "5:00PM", staff: "Peter Smith"},
//     { month: "Nov", day: 18, time: "9:00AM", staff: "Lucas Potter"},

// ]

function Main(){
    return <div className="App">
        <div class="section">
        <div class="photo-row">
          <div class="photo-item">
            <img src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg" alt="Photo 1"></img>
          </div>
          <div class="photo-item">
            <img src="https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo 2"></img>
          </div>
          <div class="photo-item">
            <img src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo 3"></img>
          </div>
        </div>
        </div>
        

        <div class="main-container">
            <div class="table-container">
                <div class="table-row heading">
                    <div class="row-item">Month</div>
                    <div class="row-item">Day</div>
                    <div class="row-item">Time</div>
                    <div class="row-item">DMV Staff</div>
                </div>
                <div class="table-row">
                    <div class="row-item">June</div>
                    <div class="row-item">10</div>
                    <div class="row-item">5:00PM</div>
                    <div class="row-item">Peter Smith</div>
                </div>
                <div class="table-row">
                    <div class="row-item">June</div>
                    <div class="row-item">11</div>
                    <div class="row-item">9:00AM</div>
                    <div class="row-item">Lucas Potter</div>
                </div>
            </div>
        </div>

        
    {/* <table>
        <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
        </tr>
        {data.map((val, key) => {
            return (
                <tr key={key}>
                    <td>{val.month}</td>
                    <td>{val.day}</td>
                    <td>{val.time}</td>
                    <td>{val.staff}</td>
                </tr>
            )
        })}
    </table> */}
</div>
}

export default Main;