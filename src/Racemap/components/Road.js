import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Road = () => {
  return (
    <>
    <div className='mt-20'>

    <VerticalTimeline className='before:bg-neutral-900'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#04C4D9', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="|01/06/2022 - 24/06/2022|"
    iconStyle={{ background: '#000000', color: '#fff' }}
    icon={<i class="fa-solid fa-hat-cowboy"></i> }
  >
    <h3 className="vertical-timeline-element-title">01</h3>
    <h4 className="vertical-timeline-element-subtitle">First Step</h4>
    <ul>
      <li>🟢 Construing the idea of Horsin’ Around</li>
      <li>🟢 Accomplishing 3D unique visuals of racer horses</li>
      <li>🟢 Building website with minting function</li>
      <li>🟢 Tokenization Horsin’ Around NFTs by creating smart contract</li>

    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#04C4D9', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: '#e05915', color: '#fff' }}
    icon={<i class="fa-solid fa-hat-cowboy"></i> }
  >
    <h3 className="vertical-timeline-element-title">02</h3>
    <h4 className="vertical-timeline-element-subtitle">Second Step</h4>
    <ul>
    <li>🟡Presale</li>
    <li>🟡33 WL Spot</li>
    <li>🟡Collection Drop</li>
    </ul>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#04C4D9', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="|After sold out|"
    iconStyle={{ background: '#431c5d', color: '#fff' }}
    icon={<i class="fa-solid fa-hat-cowboy"></i> }
  >
    <h3 className="vertical-timeline-element-title">03</h3>
    <h4 className="vertical-timeline-element-subtitle">Third Step</h4>
    <ul>
      <li>⚫Creating horse race game</li>
      <li>⚫Building market for in-game items</li>
      <li>⚫Designing competitive & smart racing ecosystem</li>
      <li>⚫Hosting the competition</li>

    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#04C4D9', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: '#000000', color: '#fff' }}
    icon={<i class="fa-solid fa-hat-cowboy"></i> }
  >
    <h3 className="vertical-timeline-element-title">04</h3>
    <h4 className="vertical-timeline-element-subtitle">Fourth Step</h4>
    <ul>
      <li>🟣Smoothing digital horse racing environment</li>
      <li>🟣Improving 3D visuals </li>
      <li>🟣Building racecourse into the metaverse</li>
      <li>🟣Getting ready to enter digital universe sitting astride our racer horses</li>

    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#04C4D9', color: '#fff' }}
    icon={<i class="fa-solid fa-hat-cowboy"></i> }
  />
</VerticalTimeline>
    </div>
    
    </>
  )
}

export default Road