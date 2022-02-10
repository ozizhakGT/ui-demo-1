import React from "react";
import './Icon.scss';

const Icon = ({icon, style={}}) => {
    switch (icon) {
        case 'filter':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20.074" height="18.167" viewBox="0 0 20.074 18.167">
                    <path id="Icon_feather-filter" data-name="Icon feather-filter" d="M22.074,4.5H3l7.63,9.022v6.237l3.815,1.907V13.522Z" transform="translate(-2.5 -4)" fill="none" stroke="#56575a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                </svg>
            )
        case 'user':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 10.272 11.74">
                    <g id="Icon_awesome-user" data-name="Icon awesome-user" fill="none" opacity="0.811">
                        <path d="M5.136,5.87A2.935,2.935,0,1,0,2.2,2.935,2.935,2.935,0,0,0,5.136,5.87ZM7.19,6.6H6.808a3.991,3.991,0,0,1-3.343,0H3.082A3.082,3.082,0,0,0,0,9.685v.954a1.1,1.1,0,0,0,1.1,1.1H9.171a1.1,1.1,0,0,0,1.1-1.1V9.685A3.082,3.082,0,0,0,7.19,6.6Z" stroke="none"/>
                        <path d="M 5.136031150817871 1 C 4.069141387939453 1 3.20116138458252 1.867980003356934 3.20116138458252 2.934880256652832 C 3.20116138458252 4.00177001953125 4.069141387939453 4.869750022888184 5.136031150817871 4.869750022888184 C 6.202920913696289 4.869750022888184 7.070900917053223 4.00177001953125 7.070900917053223 2.934880256652832 C 7.070900917053223 1.867980003356934 6.202920913696289 1 5.136031150817871 1 M 3.081621170043945 7.603469848632812 C 1.933811187744141 7.603469848632812 1.000000953674316 8.537280082702637 1.000000953674316 9.685090065002441 L 1.000000953674316 10.63891983032227 C 1.000000953674316 10.69437980651855 1.045121192932129 10.73950004577637 1.100581169128418 10.73950004577637 L 9.171481132507324 10.73950004577637 C 9.226941108703613 10.73950004577637 9.272061347961426 10.69437980651855 9.272061347961426 10.63891983032227 L 9.272061347961426 9.685090065002441 C 9.272061347961426 8.537280082702637 8.338251113891602 7.603469848632812 7.190441131591797 7.603469848632812 L 7.013986587524414 7.603469848632812 C 6.414609432220459 7.847006320953369 5.783941745758057 7.970330238342285 5.136031150817871 7.970330238342285 C 4.4902663230896 7.970330238342285 3.859865665435791 7.847025871276855 3.258760452270508 7.603469848632812 L 3.081621170043945 7.603469848632812 M 5.136031150817871 0 C 6.757091045379639 0 8.070900917053223 1.313810348510742 8.070900917053223 2.934880256652832 C 8.070900917053223 4.555930137634277 6.757091045379639 5.869750022888184 5.136031150817871 5.869750022888184 C 3.514971256256104 5.869750022888184 2.20116138458252 4.555930137634277 2.20116138458252 2.934880256652832 C 2.20116138458252 1.313810348510742 3.514971256256104 0 5.136031150817871 0 Z M 3.081621170043945 6.603469848632812 L 3.464530944824219 6.603469848632812 C 3.975841045379639 6.837339878082275 4.539881229400635 6.970330238342285 5.136031150817871 6.970330238342285 C 5.732181072235107 6.970330238342285 6.298521041870117 6.837339878082275 6.807531356811523 6.603469848632812 L 7.190441131591797 6.603469848632812 C 8.891751289367676 6.603469848632812 10.27206134796143 7.983779907226562 10.27206134796143 9.685090065002441 L 10.27206134796143 10.63891983032227 C 10.27206134796143 11.2465295791626 9.779090881347656 11.73950004577637 9.171481132507324 11.73950004577637 L 1.100581169128418 11.73950004577637 C 0.4929714202880859 11.73950004577637 9.5367431640625e-07 11.2465295791626 9.5367431640625e-07 10.63891983032227 L 9.5367431640625e-07 9.685090065002441 C 9.5367431640625e-07 7.983779907226562 1.380311012268066 6.603469848632812 3.081621170043945 6.603469848632812 Z" stroke="none" fill="#ffa52e"/>
                    </g>
                </svg>
            )
        case 'user-full':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 10.272 11.74">
                    <path id="Icon_awesome-user" data-name="Icon awesome-user" d="M5.136,5.87A2.935,2.935,0,1,0,2.2,2.935,2.935,2.935,0,0,0,5.136,5.87ZM7.19,6.6H6.808a3.991,3.991,0,0,1-3.343,0H3.082A3.082,3.082,0,0,0,0,9.685v.954a1.1,1.1,0,0,0,1.1,1.1H9.171a1.1,1.1,0,0,0,1.1-1.1V9.685A3.082,3.082,0,0,0,7.19,6.6Z" fill="#ffa52e" opacity="0.811"/>
                </svg>
            )
        case 'dollar':
            return <p style={{color: '#c1c1c1'}}>$</p>
        case 'dollar-full':
            return <p style={{color: '#0f7c2d'}}>$</p>
        case 'overview':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                    <g id="Group_271" data-name="Group 271" transform="translate(-34 -166)">
                        <g id="Rectangle_1207" data-name="Rectangle 1207" className="cls-1"
                           transform="translate(34 166)">
                            <rect className="cls-overview-2" width="21" height="9"/>
                            <rect className="cls-overview-3" x="1" y="1" width="19" height="7"/>
                        </g>
                        <g id="Rectangle_1208" data-name="Rectangle 1208" className="cls-1"
                           transform="translate(34 178)">
                            <rect className="cls-2" width="21" height="9"/>
                            <rect className="cls-3" x="1" y="1" width="19" height="7"/>
                        </g>
                    </g>
                </svg>
            )
        case 'goals':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
                    <g id="Post-icon" transform="translate(0.293 -0.243)">
                        <rect id="Rectangle_18" data-name="Rectangle 18" className="cls-custom" width="4" height="9"
                              transform="translate(-0.293 7.243)"/>
                        <rect id="Rectangle_19" data-name="Rectangle 19" className="cls-custom" width="4" height="16"
                              transform="translate(8.707 0.243)"/>
                        <rect id="Rectangle_20" data-name="Rectangle 20" className="cls-custom" width="3" height="14"
                              transform="translate(17.707 2.243)"/>
                    </g>
                </svg>
            )
        case 'manage-jobs':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                    <g id="Messages-icon" transform="translate(0.293 -0.421)">
                        <g id="Group_272" data-name="Group 272">
                            <g id="Rectangle_23" data-name="Rectangle 23" className="cls-1"
                               transform="translate(5.707 0.421)">
                                <rect className="cls-2" width="16" height="8" rx="4"/>
                                <rect className="cls-3" x="1" y="1" width="14" height="6" rx="3"/>
                            </g>
                            <g id="Rectangle_24" data-name="Rectangle 24" className="cls-1"
                               transform="translate(-0.293 13.421)">
                                <rect className="cls-2" width="16" height="8" rx="4"/>
                                <rect className="cls-3" x="1" y="1" width="14" height="6" rx="3"/>
                            </g>
                        </g>
                    </g>
                </svg>
            )
        case 'white-label':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="19.063" height="12.868" viewBox="0 0 19.063 12.868">
                    <path id="Icon_zocial-email" data-name="Icon zocial-email" className="cls-custom"
                          d="M.072,15.8V5.208q0-.018.055-.349l6.232,5.331L.146,16.164A1.558,1.558,0,0,1,.072,15.8ZM.9,4.123a.792.792,0,0,1,.313-.055H17.995a1.041,1.041,0,0,1,.331.055l-6.25,5.349-.827.662L9.613,11.476,7.976,10.134l-.827-.662ZM.918,16.881,7.186,10.87l2.426,1.967,2.426-1.967,6.268,6.011a.883.883,0,0,1-.313.055H1.212a.833.833,0,0,1-.294-.055Zm11.949-6.691L19.08,4.858a1.1,1.1,0,0,1,.055.349V15.8a1.409,1.409,0,0,1-.055.368Z"
                          transform="translate(-0.072 -4.068)"/>
                </svg>
            )
        case 'awareness':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="17.434" height="17.434" viewBox="0 0 17.434 17.434">
                    <path id="Icon_awesome-magic" data-name="Icon awesome-magic" className="cls-awarmess"
                          d="M7.627,3.269l.545-1.09,1.09-.545L8.172,1.09,7.627,0,7.083,1.09l-1.09.545,1.09.545Zm-4.9,2.179.908-1.816,1.816-.908L3.632,1.816,2.724,0,1.816,1.816,0,2.724l1.816.908ZM14.71,9.807,13.8,11.623l-1.816.908,1.816.908.908,1.816.908-1.816,1.816-.908-1.816-.908Zm2.4-6.6L14.226.319a1.089,1.089,0,0,0-1.541,0L.319,12.685a1.089,1.089,0,0,0,0,1.541l2.889,2.889a1.09,1.09,0,0,0,1.541,0L17.115,4.749A1.089,1.089,0,0,0,17.115,3.209ZM12.24,6.928,10.506,5.194l2.949-2.949,1.734,1.734Z"/>
                </svg>
            )
        case 'invoices':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="15.568" height="18.199" viewBox="0 0 15.568 18.199">
                    <path id="Icon_payment-invoice-sign-alt-o" data-name="Icon payment-invoice-sign-alt-o"
                          className="cls-custom"
                          d="M26.291,20.224a2.569,2.569,0,0,1,.5.747,2.129,2.129,0,0,1,.178.888v11.73a.851.851,0,0,1-.284.675.922.922,0,0,1-.675.285H12.357a.919.919,0,0,1-.675-.284.849.849,0,0,1-.284-.675V17.309a.85.85,0,0,1,.284-.675.921.921,0,0,1,.675-.284h9.1a2.116,2.116,0,0,1,.888.213,2.675,2.675,0,0,1,.782.462l3.164,3.2Zm-.6,13.009V22.854h-4.23a.919.919,0,0,1-.675-.284.892.892,0,0,1-.284-.711V17.665h-7.82V33.233H25.687ZM15.272,24.489a.343.343,0,0,1,.107-.249.306.306,0,0,1,.213-.107h7.18a.308.308,0,0,1,.213.107.342.342,0,0,1,.107.249v.64q0,.179-.107.213a.308.308,0,0,1-.214.107h-7.18a.308.308,0,0,1-.213-.107q-.106-.035-.107-.213v-.64Zm7.5,2.275a.291.291,0,0,1,.213.071.342.342,0,0,1,.107.249v.64a.342.342,0,0,1-.107.249.542.542,0,0,1-.213.071h-7.18a.537.537,0,0,1-.213-.071.341.341,0,0,1-.107-.249v-.64a.343.343,0,0,1,.107-.249.29.29,0,0,1,.213-.071Zm0,2.595a.548.548,0,0,1,.213.071.342.342,0,0,1,.107.249v.64a.342.342,0,0,1-.107.249.542.542,0,0,1-.213.071h-7.18a.537.537,0,0,1-.213-.071.341.341,0,0,1-.107-.249v-.64a.343.343,0,0,1,.107-.249.543.543,0,0,1,.213-.071Zm-1-11.623v3.8h3.839a.652.652,0,0,0-.249-.391l-3.163-3.2a1.165,1.165,0,0,0-.427-.213Z"
                          transform="translate(-11.398 -16.35)"/>
                </svg>
            )
        case 'profile':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                    <g id="Group_138" data-name="Group 138" transform="translate(-1.736 -0.027)">
                        <g id="Group_270" data-name="Group 270">
                            <g id="Rectangle_21" data-name="Rectangle 21" className="cls-1"
                               transform="translate(1.736 8.027)">
                                <path className="cls-2"
                                      d="M9,0H9a9,9,0,0,1,9,9v3a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V9A9,9,0,0,1,9,0Z"/>
                                <path className="cls-3"
                                      d="M9,1H9a8,8,0,0,1,8,8v1.579a.421.421,0,0,1-.421.421H1.421A.421.421,0,0,1,1,10.579V9A8,8,0,0,1,9,1Z"/>
                            </g>
                            <g id="Rectangle_22" data-name="Rectangle 22" className="cls-1"
                               transform="translate(5.736 0.027)">
                                <rect className="cls-2" width="10" height="10" rx="5"/>
                                <rect className="cls-3" x="1" y="1" width="8" height="8" rx="4"/>
                            </g>
                        </g>
                    </g>
                </svg>
            )
        case 'personal':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.834 9.077">
                    <path id="Icon_zocial-persona" data-name="Icon zocial-persona"
                          d="M4.852,7.1A22.157,22.157,0,0,1,2.4,7.021s.1-1.465.766-1.728S4,5.067,4.231,4.927l.017-.01V4.523a1.816,1.816,0,0,1-.5-.827.654.654,0,0,1-.191-.447.608.608,0,0,1,.093-.318A1.3,1.3,0,0,1,4.853,1.559,1.3,1.3,0,0,1,6.061,2.931a.606.606,0,0,1,.093.318.654.654,0,0,1-.191.447,1.812,1.812,0,0,1-.5.827v.394l.017.01c.233.14.4.1,1.067.367s.766,1.728.766,1.728A22.273,22.273,0,0,1,4.852,7.1M7.937-.035H.426A.432.432,0,0,0-.006.4V8.611a.432.432,0,0,0,.432.432H7.937L11.827,4.5,7.937-.035Z"
                          transform="translate(0.006 0.035)"/>
                </svg>

            )
        case 'house':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.941 10.834">
                    <path id="Icon_metro-home" data-name="Icon metro-home"
                          d="M14.512,9.385,8.541,4.751,2.571,9.385V7.5l5.97-4.635L14.512,7.5Zm-1.493-.168v4.478H10.034V10.71H7.049v2.985H4.063V9.217L8.541,5.859Z"
                          transform="translate(-2.571 -2.861)"/>
                </svg>
            )
    }
}

export default Icon;