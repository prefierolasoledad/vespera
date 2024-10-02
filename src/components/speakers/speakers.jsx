import React from 'react'
import backgroundHeading from './assets/backgroundHeading.png'
import backgroundspeakers from './assets/backgroundspeakers.png'
import speakerBorder from './assets/speakerBorderDesign.png'
import Speaker from './assets/speaker.png';

const speakersData=[
  {
    image:`${Speaker}`,
    name:'Mr. Dean',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Dean',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Dean',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Dean',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  }
];


function Speakers() {
  return (
    <section className='w-full 2xl:h-[2400px] xl:h-[2400px] lg:h-[2100px] md:h-[1600px] sm:h-[1500px] h-[1000px] flex items-center flex-col' style={{background: 'rgba(24, 24, 24, 1)'}}>
      <div className='md:w-[50%] md:h-[300px] sm:w-[40%] sm:h-[250px] sm:mt-[100px] w-[60%] h-[250px] mt-[100px] flex justify-center items-center' style={{backgroundImage:`url(${backgroundHeading})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
        <h1 className='text-white 2xl:text-8xl xl:text-8xl md:text-6xl sm:text-6xl text-6xl' style={{ fontFamily: 'FoglihtenNo07'}}>Speakers</h1>
      </div>
      <div className='w-full h-[0.5px] bg-gray-300 md:mt-[-50px] sm:mt-[-70px] mt-[-70px]'></div>
      <div className='lg:w-[90%] ml-[10%] w-[80%] lg:h-[1700px] md:h-[1100px] md:mt-[100px] sm:h-[1000px] sm:mt-[50px] h-[800px] mt-[50px] relative' style={{backgroundImage: `url(${backgroundspeakers})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top'}}>
        <div className='w-full'>
          <div className='absolute xl:left-[9%] xl:top-[-3.7%] 2xl:left-[15%] 2xl:top-[-3.5%] 2xl:w-[400px] 2xl:h-[400px] md:w-[250px] md:h-[250px] md:left-[5%] md:top-[-40px] sm:w-[200px] sm:h-[200px] sm:left-[5%] sm:top-[-32px] w-[170px] h-[170px] left-[5%] top-[-32px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] lg:left-[5%] lg:top-[-40px] flex justify-center items-center' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%)'}}>
            <div className=' 2xl:w-[190px] 2xl:h-[180px] 2xl:mt-[150px] lg:w-[140px] lg:h-[130px] lg:mt-[110px] lg:ml-[50px] 2xl:ml-[65px] xl:w-[190px] xl:h-[180px] xl:mt-[150px] xl:ml-[65px] rounded-[50%] md:w-[120px] md:h-[115px] md:mt-[95px] md:ml-[40px] sm:w-[95px] sm:h-[90px] sm:mt-[75px] sm:ml-[35px] w-[80px] h-[75px] mt-[65px] ml-[30px]' style={{backgroundImage:`url(${speakersData[0]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
          </div>
          <div className='xl:ml-[-50px] 2xl:w-[380px] 2xl:h-[200px] lg:w-[300px] lg:h-[150px] lg:mt-[270px] lg:ml-[-6%] md:w-[270px] md:h-[120px] md:mt-[220px] md:ml-[-14%] sm:w-[220px] sm:h-[120px] sm:mt-[170px] sm:ml-[-14%] w-[160px] h-[80px] mt-[150px] ml-[-14%] rounded-xl sm:rounded-3xl 2xl:ml-[50px] 2xl:mt-[350px] xl:w-[380px] xl:h-[200px] xl:mt-[350px] flex justify-center items-center flex-col' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='text-white 2xl:text-4xl xl:text-4xl font-bold lg:text-3xl md:text-xl sm:text-xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[0]['name']}</h1>
            <p className='text-white 2xl:text-[15px] 2xl:p-4 xl:text-[15px] xl:p-4 text-center lg:text-[13px] lg:p-3 md:text-[11px] md:p-2 sm:text-[10px] sm:p-2  text-[8px] p-0'>
              {speakersData[0]['description']}
            </p>
          </div>
        </div>
        <div className='w-full' >
          <div className=' absolute 2xl:right-[-4%] 2xl:top-[22%] 2xl:w-[400px] 2xl:h-[400px] md:right-[-22%] md:top-[210px] md:w-[250px] md:h-[250px] sm:right-[-20%] sm:top-[175px] sm:w-[200px] sm:h-[200px] right-[-28%] top-[110px] w-[160px] h-[160px] xl:right-[-14%] xl:top-[22%] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] lg:right-[-13%] lg:top-[20%] flex justify-center items-center' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%) rotateY(180deg)'}}>
            <div className='2xl:w-[190px] 2xl:h-[180px] 2xl:mt-[150px] xl:w-[190px] xl:h-[180px] xl:mt-[150px] xl:ml-[65px] lg:w-[140px] md:w-[120px] md:h-[115px] md:mt-[95px] md:ml-[40px] sm:w-[95px] sm:h-[90px] sm:mt-[75px] sm:ml-[35px] w-[75px] h-[69px] mt-[60px] ml-[25px] lg:h-[130px] lg:mt-[110px] lg:ml-[50px] 2xl:ml-[65px] rounded-[50%] ' style={{backgroundImage:`url(${speakersData[1]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
          </div>
          <div className='2xl:w-[380px] lg:w-[300px] lg:h-[150px] lg:mr-[6%] lg:mt-[220px] xl:w-[380px] xl:h-[200px] xl:mr-[7%] xl:mt-[240px] md:w-[270px] md:h-[120px] md:mr-[2%] md:mt-[120px] sm:w-[220px] sm:h-[120px] sm:mr-[2%] sm:mt-[90px] w-[160px] h-[80px] rounded-xl mr-[-2%] mt-[35px] float-right 2xl:h-[200px] 2xl:mr-[13%] 2xl:mt-[240px] 2xl:ml-[-85px] flex justify-center items-center flex-col sm:rounded-3xl' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='text-white 2xl:text-4xl xl:text-4xl font-bold lg:text-3xl md:text-xl sm:text-xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[1]['name']}</h1>
            <p className='text-white 2xl:text-[15px] 2xl:p-4 xl:text-[15px] xl:p-4 text-center lg:text-[13px] lg:p-3 md:text-[11px] md:p-2 sm:text-[10px] sm:p-2 text-[8px] p-0' >
              {speakersData[1]['description']}
            </p>
          </div>
        </div>
        <div className='w-full '>
        <div className='absolute 2xl:left-[15%] 2xl:top-[46.3%] 2xl:w-[400px] 2xl:h-[400px] xl:left-[9%] xl:top-[46.3%] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] lg:top-[41%] lg:left-[6%] md:w-[250px] md:h-[250px] md:top-[445px] md:left-[5%] sm:w-[200px] sm:h-[200px] sm:top-[375px] sm:left-[5%]  w-[170px] h-[170px] top-[230px] left-[5%] flex justify-center items-center' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%)'}}>
            <div className='2xl:w-[190px] 2xl:h-[180px] 2xl:mt-[150px] 2xl:ml-[65px] xl:w-[190px] xl:h-[180px] xl:mt-[150px] xl:ml-[65px] lg:w-[140px] lg:h-[130px] lg:mt-[110px] lg:ml-[50px] md:w-[120px] md:h-[115px] md:mt-[95px] md:ml-[40px] sm:w-[95px] sm:h-[90px] sm:mt-[75px] sm:ml-[35px] w-[80px] h-[75px] mt-[65px] ml-[30px] rounded-[50%]' style={{backgroundImage:`url(${speakersData[2]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}>
              
            </div>
          </div>
          <div className='2xl:w-[380px] xl:w-[380px] xl:h-[200px] xl:ml-[-50px] xl:mt-[650px] lg:w-[300px] lg:h-[150px] lg:ml-[-70px] lg:mt-[590px] md:w-[270px] md:h-[120px] md:mt-[360px] md:ml-[-13%] sm:w-[220px] sm:h-[120px] sm:mt-[300px] sm:ml-[-13%] w-[160px] h-[80px] rounded-xl mt-[170px] ml-[-14%] 2xl:h-[200px] bg-gray-900 2xl:ml-[55px] flex justify-center items-center flex-col sm:rounded-3xl' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='text-white 2xl:text-4xl xl:text-4xl font-bold lg:text-3xl md:text-xl sm:text-xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[2]['name']}</h1>
            <p className='text-white 2xl:text-[15px] 2xl:p-4 xl:text-[15px] xl:p-4 text-center lg:text-[13px] lg:p-3 md:text-[11px] md:p-2 sm:text-[10px] sm:p-2 text-[8px] p-0'>
              {speakersData[2]['description']}
            </p>
          </div>
        </div>
        <div className='w-full '>
          <div className='absolute 2xl:right-[-4%] 2xl:top-[72%] 2xl:w-[400px] 2xl:h-[400px] xl:right-[-14%] xl:top-[72%] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] lg:top-[63.0%] lg:right-[-13%] md:w-[250px] md:h-[250px] md:top-[700px] md:right-[-21.5%] sm:w-[200px] sm:h-[200px] sm:top-[583px] sm:right-[-20%] w-[170px] h-[170px] top-[365px] right-[-30%] flex justify-center items-center' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%) rotateY(180deg)'}}>
            <div className='2xl:w-[190px] 2xl:h-[180px] 2xl:mt-[150px] 2xl:ml-[65px] xl:w-[190px] xl:h-[180px] xl:mt-[150px] xl:ml-[65px] lg:w-[140px] lg:h-[130px] lg:mt-[110px] lg:ml-[50px] md:w-[120px] md:h-[115px] md:mt-[95px] md:ml-[40px] sm:w-[95px] sm:h-[90px] sm:mt-[75px] sm:ml-[35px] w-[80px] h-[75px] mt-[65px] ml-[30px] rounded-[50%]' style={{backgroundImage:`url(${speakersData[3]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
          </div>
          <div className='2xl:w-[380px] xl:w-[380px] xl:h-[200px] xl:mr-[7%] xl:mt-[240px] float-right 2xl:h-[200px] lg:w-[300px] lg:h-[150px] lg:mr-[6%] lg:mt-[24%] 2xl:mr-[14%] md:w-[270px] md:h-[120px] md:mt-[130px] md:mr-[2%] sm:w-[220px] sm:h-[120px] sm:mt-[90px] sm:mr-[2%] w-[160px] h-[80px] mt-[60px] mr-[-0%] rounded-xl bg-gray-900 2xl:mt-[240px] flex justify-center items-center flex-col sm:rounded-3xl' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='text-white 2xl:text-4xl xl:text:4xl font-bold lg:text-3xl md:text-xl sm:text-xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[3]['name']}</h1>
            <p className='text-white 2xl:text-[15px] 2xl:p-4 xl:text-[15px] xl:p-4 text-center lg:text-[13px] lg:p-3 sm:text-[10px] md:p-2 md:text-[11px] sm:p-2 text-[8px] p-0'>
              {speakersData[3]['description']}
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Speakers
