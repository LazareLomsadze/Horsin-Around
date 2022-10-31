import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../Nav'
// import Gifi from '../Home/img/race.gif'
import Idk from './idk.jpg'

const Box = styled.div`
width:200px;
height:200px;
box-shadow: 16px 14px 20px #000000;
border-radius:10px;
position:relative;
overflow:hidden;
// es iyo flex tavidan tu armogvewoneba mere davabrunebt
display:flex;
// display: block;
// padding:6px;
justify-content: center;
align-items: center;
font-size:1em;

&::before{
  content: "";
  background-image: conic-gradient(
    red 20deg, 
    transparent 120deg
    );
  width:150%;
  height:150%;
  position:absolute;
  animation: rotate 2s linear infinite;
  
  }
&::after{
  content: "${props => props.texti}";
  width: 190px;
  height:190px;
  background-image: url(${props => props.gif});
  background-position: center;
  background-size:cover;
  position:absolute;
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: larger;
  letter-spacing: 5px;
  box-shadow: inset 20px 20px 20px #000000;

}

  @keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  
  // img{
  //   width:100%;
  //   height:100px;
  // }
}
`
const SmTitle = styled.h2`
color: #e05915;
font-size:2em;
text-align:left;
margin-top:10vh;
font-family: 'Ultra';

`
const SmTitles = styled.h3`
color: #431c5d;
font-size:1em;
text-align:left;
font-family: 'Ultra';
font-weight: 400;
`
const STitles = styled.h3`
color: #000000;
margin-top:25px;
font-size:1.5em;
text-align:left;
font-family: "Ultra";
`


const Whitepaper = () => {

  const [isshow, ishide] = useState(true)
  const [isshow2, ishide2] = useState(true)
  const Changer = () => {
    ishide(!isshow)
  }
  const Changer2 = () => {
    ishide2(!isshow2)
  }
  return (
    <>
      <Nav second />
      <div className='mt-20'>
        <div className=" box-border flex justify-between items-center" >
        <Box gif={isshow ?  Idk : Idk} texti={isshow ? "Secretariat" : " "} onClick={Changer}>
          {/* <img src={Gifi} alt='gifi' /> */}
        </Box>
        <Box  gif={isshow2 ?  Idk : Idk} texti={isshow2 ? "Bubble Gum  " : " "} onClick={Changer2}>
        {/* <img src={Gifi} alt='gifi' /> */}
        </Box>
        
        

        </div>
        {/* <SmTitle>Gold Horse</SmTitle>
        <SmTitles>Unicorn</SmTitles> */}
        <div>
          <SmTitle>
          STATEMENT 🐴
          </SmTitle>
          <SmTitles>
          Ladies and gentlemen, warm welcome into the jockey establishment. Horsin’ Around is a plain but gainful Web3 Horse Racing platform. The project has a place only for go-getters, the ones who can become part of the fastest growing and competitive horse racing ecosystem. Simple gameplay with many benefits. Introducing a collection of 3,335 steeds. Horsin’ Around is the home of Sham the Racers (quantity -  3,333) and 2 the most exceptional and rare purebreds, Secretariat the Golden Crown, and Bubble Gum the Rainbow Tail. Each horse has different powers and skills that help them to win the contest or gain profit.           </SmTitles>
          <SmTitle>
          HORSEPOWERS 🔋
          </SmTitle>
          <SmTitles>
          Decimal Scale 
          </SmTitles>
          <SmTitles className='mt-3' >

 <span className='text-black' >⚈Speed </span>     <span className='text-black' >⚈Stamina </span>  <span className='text-black' >⚈Composure</span>     <span className='text-black' > ⚈Reflexes</span> 
          </SmTitles>
          <SmTitles className='mt-3'>
          These abilities and overall rating define the winning horses in the races. However, horses would need conformable fortune as well to help holders win the grand prize accumulated from 30% of volume trade. The collection unites 3,333 racer horses. They are distributed into 3 levels: lvl1, lvl 3, lvl 5. Holders are able to improve the powers and overall rating of the owned horse with items from the market (Hay, Water, Opioid, and Powder). Bubble Gum the Rainbow Tail doesn’t participate in the races but its holder has a right over whole gains generated from the market. Secretariat the Golden Crown holder will take 10% from each and every competition.              </SmTitles>
          <SmTitle>
          RACE 🏁
          </SmTitle>
          <SmTitles>
      <span className='block text-green-700'>[FIRST STAGE]</span>    

      We are building an ecosystem where victory only depends on the holder. The first races will be held on the 8th Saturday after the collection’s sold out. Holders have this period of time to prepare themselves and their horses for the contests and they need to practice much because the prizes are epic. 3 winners only, each for every race. Races are divided into 3 types: Rank I, Rank II, and Rank III. 
<span className='block mt-3' > Horses from lvl 1 to lvl 4 can qualify and participate in Rank III race (BREEZE OF WARM NIGHTS), from lvl 4 to lvl 7 are able to take part in Rank II race (METAVERSE DERBY - PROCURE OF FREEDOM) and sprinters from lvl 7 to lvl 10 will be qualified to Rank I race (GOLD RUSH - HALL OF FAME). 30% of volume trade will generate different prize pools for each competition. Holders are capable of beefing up their horses with in-game market items to be authorized for higher-rank races.  </span>
</SmTitles>
<SmTitles className='mt-7'>
 <span className='block text-green-700' >[SECOND STAGE]</span>  

 After the first stage races and prize awarding, we are perfectionizing the system and gameplay experience. Building the platform where only Horsin’ Around NFT holders will be able to race in opt-in contests. Daily, Weekly, and Monthly tournaments with the unalike types of prize pools (cash, token, items). Daily and Weekly races will help holders to level up their horses to have more winning chances in Monthly Grand Slams. Holders need to an opt-in specific amount to have access to the races, minus the platform fee and Secretariat's Holder 10%, winner in each race will take the whole money generated from opt-ins.

          </SmTitles>
          <SmTitle>
          UTILITY 💰
          </SmTitle>
          <SmTitles>
          Benefits are as simple to understand as the gameplay, only holders, or as we call them jockeys will have exclusive access to the platform, which means only holders will be able to participate in the game and watch it live on the website. By purchasing Horsin’ Around #NFT, you become part of the jockey establishment, which means you train and fight to chase the prizes. As a reward, every jockey will get one item from 4, that strengthens horses. However, compared to the grand prize, 30% of the volume trade divided among 3 winners, these benefits are not much. As mentioned in ‘RACE’, after sold out we will host 3 types of races:          </SmTitles>
          <STitles>
          Rank III - [BREEZE OF WARM NIGHTS] - Prize Pool - 10% of volume trade’s 30%
          </STitles>
          <STitles>
          Rank II - [METAVERSE DERBY - PROCURE OF FREEDOM] - Prize Pool - 30% of volume trade’s 30% 
          </STitles>
          <STitles>
          Rank I - [GOLD RUSH - HALL OF FAME] - Prize Pool - 60% of volume trade’s 30% 
          </STitles>
          <SmTitles className='mt-5' >
       <span className='text-orange-500' >Secretariat the Golden Crown</span>    -  Lucky holder of that rarest horse will have passive and instant income at the same time, 10% of every tournament that will be hosted on our platform will go directly to the holder of the Secretariat.  


          </SmTitles>
          <SmTitles className='mt-5' >
          <span className='text-orange-500' > Bubble Gum the Rainbow Tail </span> - The one who will become the owner of it will have an absolute right over the items’ market income. Holders need to train and boost their horses which means Bubble Gum holder will gain unpredictable amounts of money, depending on the gaming style of holders.

          70% of volume trade will be used for perfecting the horse racing ecosystem. 

          On the basis of horse racing and appreciation of its history, we decided to let holders make bets on the race with crypto or their own horses, the place for making bets will be on our discord channel.

          </SmTitles>
          <SmTitle>
          GAMEPLAY 🕹️
          </SmTitle>
          <SmTitles>
          Building a horse racing ecosystem, competitive, interesting, and dragging. After dropping and selling out, holders enter the digital environment where they should prepare for the race, feed, and boost their horses’ powers to win the competitions. Hay and Water are necessary to keep horses in shape, Opioid and Powder push up the horsepowers, these items help holders to be competitive and ready for the races. Jockeys have 8 weeks to get to know the gameplay and be up for the contest.

 <span className='block mt-6' > Jockeys feed their horses with hay and let them drink water, which helps horses to be in shape and able to take power pushers. Here are 4 types of Opioid and Powder:  <span className='text-red-700'>C</span>ommon, <span className='text-red-700'>R</span>are,<span className='text-red-700'>L</span>egendary, and <span className='text-red-700'>M</span>ythic. Each item pushes up a specific power with a specific value, depending on what type of item the holder purchases. </span>

 <span className='block mt-6' > Throughout 8 weeks, holders will prepare their horses for the competition and qualify for the proper rank race. Each contest will last from 3 to 5 minutes and the winner will be awarded automatically.
 </span>

<span className='block mt-6' > The game is plain but very engaging and attractive. The honor of Horsin’ Around is simplicity and a huge prize pool, greater than seen ever before.    </span>

  


 <span className='block mt-6'> During this period of time, holders should become Ron Turcotte themselves.   </span>

 <span className='block mt-6'>Riders be ready, competition starts soon and superb prizes are waiting. </span>

 <span className='block mt-6'>Let’s Race …🏇  </span>


          </SmTitles>
        </div>
        </div>
    </>
  )
}

export default Whitepaper