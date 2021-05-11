<p align="center">
  <img src="./src/assets/images/icons/company-name-white.png" alt="logo" width="60%">

  <h3 align="center">Pharma's League - Holder Repository</h3>

  <p align="center">
    Greater Southeast Asia's Trusted Drug Marketplace
  </p>

  <p align="center">
    <a href="#roadmap"><strong>View Figma Prototypes</strong></a>
    ·
    <a href="#getting-started"><strong>Run Locally</strong></a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-holder-repostiory">About Holder Repository</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#issuer-holder-verifier-flow">Issuer-Holder-Verifier Flow</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About Holder Repository

The Holder Repository is a wallet platform for resellers to view all of their VCs that have been issued by pharmaceutical companies. They can then use the interface to share their VCs (in this case, to the Pharma's League marketplace) for validation and identification as an authorized reseller on the platform.

## About The Project

Pharma's League uses Affinidi's verifiable credentials to build a unified and trusted marketplace to combat the massive online trade in counterfeit pharmaceuticals.

#### Rise in Couterfeit Pharmaceuticals

<p>The ongoing COVID-19 pandemic and the fast-paced world of e-commerce has taken the acceleration of selling pharmaceuticals online to the next level.</p>
<p>Though 60% of pharmaceutical brands have seen an increase of revenue from their online business, they also have suffered an increase of 67% in online counterfeits as a result. WHO estimates that counterfeit medicines worth 89 billion USD are traded annually.</p> 
<p>Multiple news articles have been published about the increasingly prevalent issue:</p>

<p align="center">
<img src="./src/assets/images/icons/news-pharma-fakes.png" alt="logo" width="80%" align="center">
</p>
</div>

#### Affected Communities
<p>Counterfeit drugs affect people from poor, underprivileged communities most, where self-medication is most common.</p>
<p>Half of the deaths from the current opioid crisis were from the synthetic heroin fentanyl, which was reported to contain counterfeit medications.</p>
<p>Fake COVID-19 vaccines have been identified in Mexico, Poland, and many other countries.</p>


#### Pharma's League's Mission

<p>We aim to prevent further harm caused towards these communities. This is done by offering a single source of truth for the purchase and reselling of drugs online, where resellers have to be authorized by respective pharmas to resell their drugs. The guarantee of trust between buyers and sellers would also enforce a more efficient pharma market.</p>

### Issuer-Holder-Verifier Flow

<img src="./src/assets/images/icons/user-flow.png" alt="User Flow">

### Technologies Used 

- [Affinidi API](apikey.affinidi.com)
- [React](https://reactjs.org/)
- [AWS SES](https://aws.amazon.com/ses/)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

#### Generate Affinidi API key

1. Go to apikey.affinidi.com
2. Register for an account
3. Store `API Key` and `API Key Hash` safely

#### Configure .env file

1. Open terminal and navigate to the project folder
2. Run `cp .env.example .env`
3. Fill in the .env file with the details that you have gathered in the previous steps

```
REACT_APP_API_KEY=<<Affinidi's API Key>>
REACT_APP_API_KEY_HASH=<<Affinidi's API Key Hash>>
REACT_APP_ENVIRONMENT=prod
REACT_APP_WALLET_URL=http://localhost:3001
```

### Installation

1. Open the terminal and navigate to the project folder
2. Run `npm install`
3. Run `cp .env.example .env`
4. Populate credentials in `.env`
5. Run `npm start`

#### Sequence

Run the [Issuer Repository](https://github.com/SmolLeaps/pharmas-league-issuer), then the [Holder Repository](https://github.com/SmolLeaps/pharmas-league-holder), then lastly the [Verifier Repository](https://github.com/SmolLeaps/pharmas-league-verifier).

## Roadmap

See the Issuer & Holder Figma prototype [here](https://www.figma.com/proto/eRlX8DKoCu7nmbqdhnoWdE/Affinidi-Hackathon?page-id=0%3A1&node-id=3%3A20&viewport=509%2C274%2C0.15831123292446136&scaling=scale-down), and the Verifier Figma prototype [here](https://www.figma.com/proto/eRlX8DKoCu7nmbqdhnoWdE/Affinidi-Hackathon?page-id=3%3A41&node-id=12%3A49&viewport=469%2C617%2C0.2826032042503357&scaling=scale-down).

## Contributing

Contributors:

- [Carey Lai](https://github.com/careylzh)
- [Callista Chang](https://github.com/callistachang)

## Acknowledgements

Submitted for [Affinidi 'PoC'athon 2021](https://affinidipocathon.devpost.com/).