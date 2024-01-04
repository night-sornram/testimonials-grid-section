import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <div className=' w-11/12 lg:w-[1024px] flex flex-col md:h-auto md:pt-0  pt-10 h-screen md:grid grid-cols-4 grid-rows-2 gap-6'>
        <div className=' md:text-[10px] lg:text-xs text-white col-start-1 col-end-3 row-start-1 row-end-2 p-7 rounded-lg space-y-3 bg-quot bg-no-repeat  bg-right-top bg-custom-100'>
          <div className=' flex flex-row'>
            <div>
              <Image
              src={"/images/image-daniel.jpg"}
              width={56}
              height={56}
              className=' rounded-full ring-2 ring-custom-400 ring-opacity-70 w-8 h-8 lg:w-10 lg:h-10'
              alt='daniel'/>
            </div>
            <div className=' ml-3 flex flex-col'>
              <div>
                Daniel Clifford
              </div>
              <div className=' text-custom-400 text-opacity-50'>
                Verified Graduate
              </div>
            </div>
          </div>
          <div className=' text-lg md:text-sm lg:text-lg font-semibold'>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
          </div>
          <div className=' text-custom-400 text-opacity-70'>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </div>
        </div>
        <div className=' md:text-[10px] lg:text-xs text-white col-start-3 col-end-4 row-start-1 row-end-2 bg-custom-200 p-7 rounded-lg space-y-3'>
          <div className=' flex flex-row'>
            <div>
              <Image
              src={"/images/image-jonathan.jpg"}
              width={56}
              height={56}
              className=' rounded-full ring-2 ring-custom-400 ring-opacity-70 w-8 h-8 lg:w-10 lg:h-10'
              alt='jonathan'/>
            </div>
            <div className=' ml-3 flex flex-col'>
              <div>
                Jonathan Walters
              </div>
              <div className=' text-custom-400 text-opacity-50'>
                Verified Graduate
              </div>
            </div>
          </div>
          <div className='text-lg md:text-sm lg:text-lg font-semibold'>
            The team was very supportive and kept me motivated
          </div>
          <div className=' text-custom-400 text-opacity-70'>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ” 
          </div>
        </div>
        <div className=' md:text-[10px] lg:text-xs col-start-1 col-end-2 row-start-2 row-end-2 bg-white p-7 rounded-lg space-y-3'>
          <div className=' flex flex-row'>
            <div>
              <Image
              src={"/images/image-jeanette.jpg"}
              width={56}
              height={56}
              className=' rounded-full ring-2 ring-custom-400 ring-opacity-70 w-8 h-8 lg:w-10 lg:h-10'
              alt='jeanette'/>
            </div>
            <div className=' ml-3 flex flex-col'>
              <div className=' text-custom-300'>
                Jeanette Harmon
              </div>
              <div className=' text-custom-300 text-opacity-50'>
                Verified Graduate
              </div>
            </div>
          </div>
          <div className='text-lg md:text-sm lg:text-lg font-semibold'>
            An overall wonderful and rewarding experience
          </div>
          <div className=' text-custom-300 text-opacity-70'>
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </div>
        </div>
        <div className=' md:text-[10px] lg:text-xs text-white  col-start-2 col-end-4 row-start-2 row-end-2 p-7 rounded-lg space-y-3 bg-custom-300'>
          <div className=' flex flex-row'>
            <div>
              <Image
              src={"/images/image-patrick.jpg"}
              width={56}
              height={56}
              className=' rounded-full ring-2 ring-custom-100 ring-opacity-70 w-8 h-8 lg:w-10 lg:h-10'
              alt='patrick'/>
            </div>
            <div className=' ml-3 flex flex-col'>
              <div>
                Patrick Abrams
              </div>
              <div className=' text-custom-400 text-opacity-50'>
                Verified Graduate
              </div>
            </div>
          </div>
          <div className='text-lg md:text-sm lg:text-lg font-semibold'>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
          </div>
          <div className=' text-custom-400 text-opacity-70'>
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
          </div>
        </div>
        <div className=' md:text-[10px] lg:text-xs col-start-4 col-end-4 row-start-1 row-end-3 bg-white p-7 rounded-lg space-y-3'>
          <div className=' flex flex-row'>
            <div>
              <Image
              src={"/images/image-kira.jpg"}
              width={56}
              height={56}
              className=' rounded-full ring-2 ring-custom-400 ring-opacity-70 w-8 h-8 lg:w-10 lg:h-10'
              alt='kira'/>
            </div>
            <div className=' ml-3 flex flex-col'>
              <div className=' text-custom-300'>
                Kira Whittle
              </div>
              <div className=' text-custom-300 text-opacity-50'>
                Verified Graduate
              </div>
            </div>
          </div>
          <div className='text-lg md:text-sm lg:text-lg font-semibold'>
            Such a life-changing experience. Highly recommended! 
          </div>
          <div className=' text-custom-300  text-opacity-70'>
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
          </div>
        </div>
      </div>
    </div>
  )}