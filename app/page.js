import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
		<main>


			<div className="row">
				<div className="col-lg-4">
					<h2 className="timelineh1">Home</h2>
					<h2 className="timelineh1 active d-flex">
						Success Guide<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
					</h2>
					<p className="sub-menu">Finances</p>
					<p className="sub-menu">Academics</p>
					<p className="sub-menu">Volunteering</p>
					<p className="sub-menu">Entrepreneurship</p>
					<h2 className="timelineh1">Requests</h2>
					<h2 className="timelineh1">Profile</h2>
					<h2 className="timelineh1">Logout</h2>
				</div>
				<div className="col-lg-8">
					<div className="timeline">
						<div className="outer">
							<div className="card">
								<div className="info">
									<img className="img-responsive m-0 p-0 border-radius-4"
										src="https://ewscripps.brightspotcdn.com/dims4/default/9726dc3/2147483647/strip/true/crop/1366x717+0+188/resize/1200x630!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F05%2Fc6%2F36874d764ef38be39285bf95c0da%2Folivet-colletge.jpg" />
									<h3 className="title">Finances</h3>
									<p className="headline">Learn budgeting with 2-minute videos!</p>
									<p className="headline">Get free help preparing your taxes by an IRS-certified volunteer through the Volunteer Income Tax Assistance (VITA) program!</p>
									<p className="headline">Watch quick video clips with tax tips from the IRS! </p>
								</div>
							</div>
							<div className="card">
								<div className="info">
									<img className="img-responsive lp-news-image p-0 border-radius-4"
										src="https://www.gannett-cdn.com/-mm-/9bb42f485a46967f013637fa6b8253e496b23055/c=0-118-1280-841/local/-/media/2017/04/26/MIGroup/Lansing/636288228934860779-Lansing-Promise.JPG?width=3200&amp" />
									<h3 className="title">Academics</h3>
									<ul className="list-right list-unstyled headline">
										<li>Academics</li>
										<li>College Resources</li>
										<li>Lansing Community College</li>
										<li>Academic Resources</li>
										<li>Michigan State University</li>
										<li>Academic Support Services</li>
										<li>Olivet College</li>
										<li>Student Success Center</li>
										<li>Virtual Campus Tour</li>
										<li>Going Back to College</li>
										<li>CapCAN Resource Guide</li>
									</ul>
								</div>
							</div>

							<div className="card">
								<div className="info">
									<img className="img-responsive m-0 p-0 border-radius-4"
										src="https://ewscripps.brightspotcdn.com/dims4/default/9726dc3/2147483647/strip/true/crop/1366x717+0+188/resize/1200x630!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F05%2Fc6%2F36874d764ef38be39285bf95c0da%2Folivet-colletge.jpg" />
									<h3 className="title">Volunteering</h3>
									<p className="headline">
										Where do I start?
									</p>
									<p className="headline"><a href="/">Check out the list of available opportunities  provided by SERVE Lansing</a></p>

									<p className="headline"><a href="/">Check the Volunteer Opportunities  page for opportunities tailored to students</a></p>
									<p className="headline"><a href="/">Make the most of volunteering</a></p>
									<p className="headline"><a href="/">Volunteering is a great way to gain personal and professional experience while making positive changes in your community. (Student's Guide to Volunteering by OnlineSchools.org )</a></p>




								</div>
							</div>

							<div className="card">
								<div className="info">
									<img className="img-responsive lp-news-image p-0 border-radius-4"
										src="https://www.gannett-cdn.com/-mm-/9bb42f485a46967f013637fa6b8253e496b23055/c=0-118-1280-841/local/-/media/2017/04/26/MIGroup/Lansing/636288228934860779-Lansing-Promise.JPG?width=3200&amp" />
									<h3 className="title">Entrepreneurship</h3>
									<p className="headline-2">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
										totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
									</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>



      {/*<div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>*/}
    </main>
  )
}
