This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### ()()()()()()()()()()()()()()
### 
### HOMEWORK NOTES AND WRITE UP

So for me, a dashboard is something that you should always be able to see all of, or at least monitor the overview and issue commands easily, so when I came up with this, I decided to create a no scroll full screen experience. This is a command center style dash for your users. 

Initially I started out with some sketching/wireframing of the UI on paper, then began creating the necessary HTML structure based in flexbox. I started with v2 parcel for the composability and speed, but switched to Create React App after I finished creating the app skeleton in one JSX to breaking it into components, and activiating them, adding a router and breathing life into the context with the sample data.

Wrap Update: So all of the specified features are complete. There is some perfecting left to do on the live text update... and the actual look of the tables is utilitarian, but be sure to create a few campaigns and see the way the list fixed scrolls behind the footer. The fixed scroll overflow is intentional. This demo was created to be app like and fit on a desktop in full screen if so desired. For an internet marketer... this should feel like playing a fun instraument, so I added a feature called the Launch Pad. I imagined it when I visualized the requirements before I looked at your current dash. The launch pad is a place where your customers, like Gary V while he's in his apartment assessing the world, can queue up campaigns he imagines, launch them, and watch how they perform in real time, so he can use creative marketing to respond intuitively to live events on social media, the internet or wherever...  without getting distracted from the moment while browsing for them between a long list of the scheduled campaigns, or just to keep tabs on them while doing other Postscript tasks. Using this campaign technique could lead to better performing micro campaigns, and a better understanding of the target segments. 

The design/implementation on launch pad is still a quick visual demo, but you can change watch between true/false in src/data/campaigns.json in the json to add/remove from the list. Next steps are threading through the watch switches in the sent/preview lists, and letting the launch button update Status from Preview to Sent, possibly adding some animation for an engaging launch sequence, but I'm going to send it to you before I worry about any of that, the code is similar to the code in edit anyway, just in two more places.

I've enjoyed working on this one very much... it's a fun space.