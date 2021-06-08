import React from 'react'
import "./App.css"
export default function App() {
    return (
        <div >
           <main>
               <aside>
               <i className="fa fa-bars"></i>
			   <i className="fa fa-home"></i>
			   <i className="fa fa-search"></i>
			    <i className="fa fa-volume-up"></i>
			    <i className="fa fa-user"></i>
			    <i className="fa fa-spotify"></i>
			    <i className="fa fa-cog"></i>
			    <i className="fa fa-soundcloud"></i>


               </aside>

               <section className="content">
                   <div className="music-head">
                   <img src="images/cattyboard.jpg" alt=""/>
                   
                       <section className="catty-music">
                          <div>
                          <p className="sm-text-center">catty box office Top 50 Single Charts (11.06.36)</p>
						<p className="sm-hide">Unknown Artist</p>
						<p className="sm-hide">2021 . Charts . 100 songs</p>
                          </div>
                          <div className="sm-text-center">
                             <i class="fa fa-play"> &nbsp;Play all</i>
						     <i class="fa fa-plus"> &nbsp;Add to</i>
						     <i class="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>

                          </div>
                       </section>
                   </div>
                   <ul className="music-list">
                       <li>
                       <p>1. Fia</p>
					<p className="sm-hide">Davido </p>
					<p className="sm-text-right">2:54</p>
					<p className="sm-hide"><span className="catty-cloud"> CLOUD SYNC</span></p>

                       </li>

                       <li>
					<p>2. blown skin girl</p>
					<p className="sm-hide">beyounce ft Wizkid</p>
					<p className="sm-text-right">4:06</p>
					<p className="sm-hide"><span className="catty-cloud"> CLOUD SYNC</span></p>
				</li>

				<li>
					<p>3. you are God alone!</p>
					<p className="sm-hide">Sinach</p>
					<p className="sm-text-right">3:56</p>
					<p className="sm-hide"><span className="catty-cloud"> CLOUD SYNC</span></p>
				</li>

				<li>
					<p>4. not the girl</p>
					<p className="sm-hide">praiz</p>
					<p className="sm-text-right">3:34</p>
					<p className="sm-hide"><span className="catty-cloud">CLOUD SYNC</span></p>
				</li>

                   </ul>


               </section>
               
               
            </main> 
            <footer>

            <div class="catty-music-small">
                  <img src="images/cattyboard.jpg" alt=""/>
                  <div>
                  <p>fia</p>
				<p>davido</p>


                  </div>

        </div>
        <div className="catty-music-controls">
        <i className="fa fa-step-backward"></i>
			<i className="fa fa-pause"></i>
			<i className="fa fa-step-forward"></i>
			<i className="fa fa-rotate-right sm-hide"></i>
			<i className="fa fa-random sm-hide"></i>

        </div>

		

	</footer>


        </div>
    )
}
