const contact = { x: 1104, y: 300 };
const terminalRadius = 30;
const cycle = 8400;
const cycleDuration = `${cycle}ms`;
// Start with the leading signal already inside the visible part of the hero.
const initialLead = 5000;

function stopBeforeContact(directionX, directionY) {
  const offset = terminalRadius / Math.hypot(directionX, directionY);
  return `L${Math.round(contact.x + directionX * offset)} ${Math.round(contact.y + directionY * offset)}`;
}

const mainPulse = {
  track: `M0 389H235Q243 389 249 383L307 325Q313 319 321 319H530Q538 319 544 313L599 258Q605 252 613 252H947Q955 252 961 258L997 294Q1003 300 1011 300${stopBeforeContact(-1, 0)}`,
  delay: 160,
  travel: 6400,
  radius: 5.5,
  tail: 0.11,
};
const branchPulses = [
  { track: `M0 106H270L323 159H756L795 198H1002${stopBeforeContact(-1, -1)}`, delay: 1960, travel: 5800, radius: 3.6, tail: 0.085 },
  { track: `M0 494H333L403 424H743L789 378H1026${stopBeforeContact(-1, 1)}`, delay: 2300, travel: 6500, radius: 3.8, tail: 0.095 },
];

const passiveTracks = [
  "M0 52H151L205 106",
  "M0 172H149L185 208H482L531 159",
  "M154 0V28L205 79H370L394 103H696L752 159",
  `M646 0V44L686 84H859L908 133H965L1030 198H1040L1104 262${stopBeforeContact(0, -1)}`,
  "M0 242H234L274 282H453L490 319",
  "M0 444H130L185 389",
  "M436 319L480 275H516",
  "M0 554H201L261 494",
  "M293 600V558L324 527H518L621 424",
  `M654 600V573L701 526H788L840 474H976L1104 346${stopBeforeContact(0, 1)}`,
  "M505 456H606L638 424",
  "M757 338H880L920 378",
  "M862 252L903 211H978",
  `M1033 0V83L1104 154${stopBeforeContact(0, -1)}`,
  `M1188 0V102L1138 152V266${stopBeforeContact(1, -1)}`,
  `M1440 97H1348L1309 136H1268${stopBeforeContact(1, -1)}`,
  `M1440 226H1332L1258 300${stopBeforeContact(1, 0)}`,
  "M1440 347H1323L1281 305H1253",
  `M1440 446H1328L1267 385H1189${stopBeforeContact(1, 1)}`,
  `M1440 522H1361L1323 484H1237L1217 464H1153L1104 415${stopBeforeContact(0, 1)}`,
  "M1128 600V526L1104 502V415",
];

const vias = [[516, 275], [505, 456], [757, 338], [978, 211], [686, 84], [1281, 305]];

const arrivals = [mainPulse, ...branchPulses]
  .map(({ delay, travel }) => delay + travel)
  .sort((first, second) => first - second);
const [firstArrival] = arrivals;
const reactionFrames = arrivals.flatMap((arrival) => {
  const offset = arrival - firstArrival;
  return [offset, offset + 270, offset + 940];
});
const reactionTimes = [...reactionFrames, cycle].map((frame) => frame / cycle).join(";");
const reactionEasing = reactionFrames.map(() => "0.2 0.5 0.3 1").join(";");

function ContactReaction({ attributeName, idle, peak }) {
  const values = [...arrivals.flatMap(() => [idle, peak, idle]), idle].join(";");

  return (
    <animate
      attributeName={attributeName}
      values={values}
      keyTimes={reactionTimes}
      calcMode="spline"
      keySplines={reactionEasing}
      begin={`${firstArrival - initialLead}ms`}
      dur={cycleDuration}
      repeatCount="indefinite"
    />
  );
}

function Pulse({ track, delay, travel, radius, tail, primary = false }) {
  const begin = `${delay - initialLead}ms`;
  const arrival = travel / cycle;
  const movementTimes = `0;${arrival};1`;

  return (
    <g className={`hero-circuit-motion ${primary ? "hero-circuit-primary" : "hero-circuit-secondary"}`} opacity="0">
      <animate
        attributeName="opacity"
        values="0;1;1;0;0"
        keyTimes={`0;0.09;${arrival};${arrival + 0.07};1`}
        begin={begin}
        dur={cycleDuration}
        repeatCount="indefinite"
      />
      <path d={track} pathLength="1" strokeDasharray={`${tail} 1`} strokeDashoffset={tail} className="hero-circuit-current">
        <animate
          attributeName="stroke-dashoffset"
          values={`${tail};${tail - 1};${tail - 1}`}
          keyTimes={movementTimes}
          begin={begin}
          dur={cycleDuration}
          repeatCount="indefinite"
        />
      </path>
      <circle className={primary ? "hero-circuit-runner" : "hero-circuit-secondary-runner"} r={radius}>
        <animateMotion
          path={track}
          calcMode="linear"
          keyPoints="0;1;1"
          keyTimes={movementTimes}
          begin={begin}
          dur={cycleDuration}
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default function HeroCircuit() {
  return (
    <div className="hero-circuit">
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="hero-circuit-board"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="hero-circuit-glow">
            <stop offset="0" stopColor="#fff4a9" />
            <stop offset="0.38" stopColor="#ffc53b" stopOpacity="0.68" />
            <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="hero-circuit-tracks">
          {passiveTracks.map((track) => <path key={track} d={track} />)}
          {branchPulses.map(({ track }) => <path key={track} d={track} />)}
          {vias.map(([x, y]) => <circle key={x} cx={x} cy={y} r="3.1" className="hero-circuit-via" />)}
        </g>
        <path d={mainPulse.track} className="hero-circuit-main-track" />
        <path d={mainPulse.track} className="hero-circuit-current hero-circuit-still" />
        {branchPulses.map((pulse) => <Pulse key={pulse.track} {...pulse} />)}
        <Pulse {...mainPulse} primary />
        <g transform={`translate(${contact.x} ${contact.y})`}>
          <circle r="56" fill="url(#hero-circuit-glow)" opacity="0.23" />
          <circle r="56" fill="url(#hero-circuit-glow)" opacity="0" className="hero-circuit-motion">
            <ContactReaction attributeName="opacity" idle={0} peak={0.58} />
          </circle>
          <circle r={terminalRadius} className="hero-circuit-terminal" />
          <circle r={terminalRadius} opacity="0" className="hero-circuit-impact hero-circuit-motion">
            <ContactReaction attributeName="opacity" idle={0} peak={0.82} />
          </circle>
          <circle r="8.5" fill="#ffca38" className="hero-circuit-contact hero-circuit-motion">
            <ContactReaction attributeName="r" idle={8.5} peak={12.5} />
            <ContactReaction attributeName="fill" idle="#ffca38" peak="#ffdf75" />
          </circle>
          <circle r="8.5" fill="#ffca38" className="hero-circuit-contact hero-circuit-still" />
        </g>
      </svg>
    </div>
  );
}
