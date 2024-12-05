import React from 'react'
import Graph from './Graph'


const Content = () => {

  const today = new Date();
  
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear()

  const formattedDate = `Today, ${day} ${month} ${year}`


  return (
    <div className='flex flex-col pl-5 lg:gap-7 gap-3'>
      
      <div className='flex items-center gap-3'>
        <div className='w-8 h-lineheight bg-black opacity-70'></div>
        <h1 className='opacity-60'>show:</h1>
        {formattedDate}
      </div>
      {/* section-one */}

      <div className='grid lg:flex lg:flex-row grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 
      md:grid md:grid-cols-3 md:grid-rows-2
      lg:justify-between md:w-fit mb-3 xl:flex xl:gap-4'>
        <span className='top-recs lg:w-64 lg:h-28 w-56 h-24'>
          <div className='lg-sq lg:w-10 lg:h-10 lg:mr-5'><div className='sm-sq lg:h-radius lg:w-radius'></div></div>
          <div>
            <h1 className='title'>Total Investment</h1>
            <h2 className='data'>$432.76</h2>
          </div>
        </span>

        <span className='top-recs lg:w-64 lg:h-28 w-56 h-24'>
          <div className='lg-sq lg:w-10 lg:h-10 lg:mr-5'><div className='sm-sq lg:h-radius lg:w-radius'></div></div>
          <div>
            <h1 className='title'>Total Return</h1>
            <h2 className='data'>425</h2>
          </div>
        </span>

        <span className='top-recs lg:w-64 lg:h-28 w-56 h-24'>
          <div className='lg-sq lg:w-10 lg:h-10 lg:mr-5'><div className='sm-sq lg:h-radius lg:w-radius'></div></div>
          <div>
            <h1 className='title'>Principal Amount</h1>
            <h2 className='data'>$432.76</h2>
          </div>
        </span>

        <span className='top-recs lg:w-64 lg:h-28 w-56 h-24'>
          <div className='lg-sq lg:w-10 lg:h-10 lg:mr-5'><div className='sm-sq lg:h-radius lg:w-radius'></div></div>
          <div>
            <h1 className='title'>Accrued Interest</h1>
            <h2 className='data'>$502.92</h2>
          </div>
        </span>
      </div>

      {/* section-two */}

      <div className='flex lg:flex lg:flex-row lg:gap-6 lg:justify-between mb-2 flex-col'>
        <span className='lg:w-graphWidth lg:h-fit bg-white rounded-xl p-4 h-fit w-fit mb-3'>
          <div className='flex flex-row justify-between px-3'>
            <h1>Revenue</h1>
            <select className='border border-black bg-white'>
              <option>
                Week
              </option>
            </select>
          </div>
          <div className='w-full'>
            <Graph />
          </div>
        </span>
        {/* lg:w-statuswidth lg:h-statusheight lg:p-9 lg:justify-between 
        lg:items-center
        lg:flex
         xl:flex xl:flex-row xl:gap-x-20 xl:p-20
        items-center w-fit h-fit rounded-xl flex text-white */}
        <span className='bg-statusColor -statuswidth h-statusheight p-4 flex text-white rounded-xl justify-between
         lg:w-statuswidth lg:h-statusheight lg:p-9 lg:justify-between
         xl:gap-x-20
        '>
           <span className='flex items-start flex-col'>
            <h1 className='mb-5 font-semibold'>Status</h1>
            <div className='stats-circle flex flex-col items-center justify-center'>
                <h2 className='text-xl'>80%</h2>
                <h4 className='text-xs'>Onboarded</h4>
              </div>
           </span>
           <span className='flex items-start flex-col gap-1'>
            <select className='bg-statusColor border border-white mb-2'>
              <option>
                Today
              </option>
              </select>
              <h1 className='stats'>142</h1>
              <h3>Principal</h3>

              <h1 className='stats'>1.235</h1>
              <h3>Interest</h3>

              <h1 className='stats'>120</h1>
              <h3>Cancelled</h3>
           </span>
        </span>
      </div> 

      {/* section-three */}

      <div className='flex lg:flex-row lg:gap-6 gap-3 section-three flex-col'>
        <span className='lg:w-cshWidht w-fit h-fit p-3 bg-white rounded-xl'>
          <div className='flex justify-between pr-7 pl-2 w-full'>
            <h1>Recent Cash in</h1>
            <select className='bg-white border border-black relative right-2'>
              <option>Today</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Investor no</th>
                <th>Investor name</th>
                <th>Amount</th>
                <th>Product id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#000123</td>
                <td>Fintree Ltd</td>
                <td>123.890</td>
                <td>#9809712</td>
                <td className='text-delCol'>Delivered</td>
              </tr>
              <tr>
                <td>#000123</td>
                <td>Kamsari Ltd</td>
                <td>123.890</td>
                <td>#8201297</td>
                <td className='text-pendCol'>Pending</td>
              </tr>
            </tbody>
          </table>
        </span>
        <span className='lg:w-trackW w-fit bg-white h-fit p-3 rounded-xl'>
        <div className='flex justify-between p-5'>
            <h1>Tracking</h1>
            <select className='bg-white border border-black'>
              <option>Today</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Investors</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fintree Ltd</td>
                <td>123.890</td>
              </tr>
              <tr>
                <td>Kamsari Ltd</td>
                <td>1442.235</td>
              </tr>
              <tr>
                <td>Samarinda Ltd</td>
                <td>880.265</td>
              </tr>
            </tbody>
          </table>
        </span>
      </div>
    </div>
  )
}

export default Content