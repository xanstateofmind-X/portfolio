import { BookOpen, Lock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import ChapterReader from './ChapterReader'

const chapters = [
  {
    number: 1,
    unlocked: true,
    preview: 'Daniel sits at the edge of the bathtub, waiting for his father - a man lost to dementia - to take a bath. What follows is a raw, unflinching look at caregiving, masculinity, and the weight of being the one who stays.',
    text: [
      `I sat at the edge of the bathtub, staring at the stains. Months of hard water, baked in by time, left behind a yellow-brown map on the tiles. The faucet kept dripping. Slow, steady. Each drop landed in the same spot, making the edges darker, like the floor was rotting in slow motion. It's almost like watching paper catch fire. The way it darkens, curls in on itself. I could almost smell it. Something about it feels... right. Honest.`,
      `Maybe I care too much. Maybe that's the problem. Who gets to decide what matters and what doesn't? People say it's all subjective, but they don't really believe that. I do. I notice the things they miss. Like the faint smear of blood on the sink from this morning when I nicked my jaw while shaving. It's small. Almost insignificant. But it's still there. Little things like that get under my skin. They always do.`,
      `I watched the bathroom like it might change if I looked hard enough. But there was still no sign of him. He was supposed to be here ten minutes ago. The water was turning cold, inch by inch. And the heater would take forever. If I lose this window, I lose the day. He needs a bath. That isn't up for debate.`,
      `I sighed and stood up, my foot nudging an empty shampoo bottle. It had to be empty because no one else around here bothers to throw things away.`,
      `"Who's there?"`,
      `The voice came from the kitchen. No doubt about it. And just like that, it had to happen now, when I least needed it.`,
      `Stepping out of the bathroom meant leaving behind whatever passed for serenity in this house (sarcasm fully intended). And that's when I saw him gripping a knife from the counter. His eyes darted, wild and unfocused, four fingers wrapped tight around the blade.`,
      `Now, let me tell you, this wasn't the first time. I didn't even register the knife at first, not sharp, not dangerous, just there like a part of the background noise. What really caught my attention, however, was the way the tire marks crisscrossed all over the house. It wasn't random. There was a pattern, restless and chaotic, like a silent scream written across the floor.`,
      `"Dad, it's me," I said, trying to sound calm, believable even. I'd been through this before and knew exactly how it would go.`,
      `"Get out!" he barked, lunging with the knife. That's when everything clicked in a split second. Dying wasn't on the table. Not like this. Not by him.`,
      `I reached out and grabbed the picture frame I'd stashed in the cabinet just for moments like this. And there I was - nine years old and smiling next to him at my first baseball game. I don't remember much about that day except how my crooked front teeth stuck out like a broken fencepost. Kids at school called me 'the clown' and yeah, I wanted to fight back. But I never did. They were bigger, ten times bigger, and that meant they were stronger. Survival of the fittest, they say. And they're not wrong. That picture is all the proof you need.`,
      `His grip loosened and his eyes softened, recognition flickering through the cataract haze.`,
      `"Daniel?", he said in his gruff, worn-out voice as he placed the knife back onto the counter.`,
      `"It's me, Dad. We've got to get you to take a bath." The words came out calm but firm. It'd been four whole days. He'd developed the old-man stink. Now, I have nothing against old men in general, but they do have a particular smell associated with them. It's like the scent of a newborn baby, except this was far from pleasant and belonged to an eighty-two year old man.`,
      `I wheeled him toward the bathroom. Seeing him naked wasn't anything particularly new, but today something felt different. I first took his sweater off, it'd been sticking to his hairy skin like a second layer, with pilling starting to come out.`,
      `He sat there, skin sagging like old curtains, white hair clinging to his scalp in wiry strands. It wasn't regal. It wasn't wise. It just looked like time had forgotten him.`,
      `His chest was covered in scars. I dipped the sponge into the water. Warm, not hot. He hated hot.`,
      `I scrubbed in circles. His skin drank it in like cracked earth under a sudden rain. I'd seen pictures like that. Search "drought" on the internet and you'd get the idea. A sponge squeezing water over a dead field. That's what it looked like.`,
      `The smell was bad. I won't pretend it wasn't. The smell hit like rotting apples left in a plastic bag. A mix of piss, mildew, and something sweet that shouldn't be sweet at all. But it didn't matter. There was something almost satisfying about it. Watching the grime peel away. Seeing skin again. Like proof that he was still in there somewhere.`,
      `I kept scrubbing. Not for him. Not really. For me. Because no one else would. Because someone had to.`,
      `He grabbed the mug from the edge of the tub and threw it across the room. Water hit the tiles. The mug bounced once, then rolled into a corner.`,
      `"Who the hell are you?" he shouted, voice hoarse, more lost than angry.`,
      `I didn't answer. Just let the silence settle between us. I'd stopped reacting a long time ago.`,
      `I picked up the photo, the usual one. Him and me, younger, still smiling. Held it out so he could see. Let it do the talking.`,
      `Then I went back to scrubbing. Like nothing had happened.`,
      `He looked at the photo. His shoulders began to shake, just slightly at first.`,
      `I couldn't see his face, but I didn't need to. Some things you learn to recognize without words. The way his body folded in, the way his hand went still in the water. He was crying. I was sure of it.`,
      `A lump rose in my throat, thick and sudden. I'd held it together longer than I thought I could, but seeing him like that almost broke something inside me.`,
      `I rested my head against his shoulder. The smell didn't bother me this time. Fighting to hold back the tears, they still brimmed in my eyes, blurring everything around me. I'm sure he felt the warmth of my breath and the dampness of my tears on his shoulder. Yet I couldn't let him see. I didn't want him to know his son was weak.`,
      `Being a man means you don't get to fall apart. That's the rule, right? You're supposed to hold it all together. Be the foundation, the fixer, the calm in the storm. It doesn't matter if the weight of it grinds you down until there's nothing left. You're the one expected to carry it all. And when you slip, when you start to crack, everyone looks at you like you're broken. Like you're some kind of failure. "What's wrong with you?" they ask. "You're the man. Fix it."`,
      `It's not about choice, you see? It's obligation. Dad used to tell me, "You're my son, Daniel. One day, this will all be on you." And, well, I guess he was right. It is on me. The house, the bills, the baths, the memories he can't even hold onto anymore. It's all on me, like a sentence handed down without trial or mercy.`,
      `I don't get to complain. Men don't complain. You suck it up. You deal with it. You bury your emotions under a mountain of "I'm fines" and "Don't worry about its." Because what's the alternative? Who steps in when the man steps out? No one. That's the answer. No one.`,
      `Sometimes I wonder if this is what being a man is supposed to feel like. Is it supposed to feel like suffocating under the expectations, like you're drowning in a sea of 'shoulds' and 'musts'? Is it supposed to feel like giving everything you have until there's nothing left, only to be told it's still not enough?`,
      `But then I look at him-the man who taught me what it means to carry the weight. I see the way it bends his shoulders, how it lingers in his eyes, and I know I can't stop. Because if I do, who will? I'm his son. And that has to mean something. Even when it feels like it's breaking me, even when it feels too heavy to bear… it still means something.`,
      `After a brief moment, I pulled myself together, wiping my face with wet hands that did little to dry the tears. I kept scrubbing, cleaning away those layers of dirt. "I'll get us through this, Dad," I promised as I wiped him clean with a dry towel.`,
      `I then wheeled him back to his room. I had already picked out a new sweater for him. Deep olive green. It made the shadows in his eyes stand out. As I pulled the sleeve up, it snagged on his hair for a moment. In that split second, a violent thought crashed through my mind. Maybe I should just use the other sleeve to choke him and end all this. Stop the pain, stop the waiting. The idea was sharp and electric. But I slammed it down, shoved it into a dark corner where it couldn't breathe. Not now. Not like this. I helped him slide his hand into the sleeve slowly, then the other. Every little movement was a desperate attempt to keep control on a day already breaking apart.`,
      `The sunlight streamed through the window in thin, pale beams, cutting across the room in sharp lines. Dust motes floated through the rays, moving in slow, measured patterns, caught in a silent rhythm only they could hear. It reminded me of the molecular diagrams I used to sketch as a kid, tiny suspended orbs, each one a part of something greater.`,
      `I glanced around the room, knowing I'd already changed the sheets before the bath. At least that was one thing taken care of for another week. Holding onto that little win, I guided him to the table for lunch.`,
      `Steam curled up from the stew I'd made, mingling with the scent of his favorite black tea from Denny's. I took a seat across from him, watching him lift the cup. His chapped lips made a slurping noise that buzzed in the back of my head.`,
      `"You've been awfully quiet since the bath," I said, pouring myself some tea, trying to fill the silence.`,
      `He looked up, his eyes sharp and steady. "Daniel, everything I did had its reasons," he said, his voice slipping into that familiar, stubborn tone. The kind he used when he was angry, whether yelling at me for tracking mud in the house or arguing with the mailman over a late package. A voice that demanded obedience even when the reasons felt impossible to grasp.`,
      `"I know," I said, voice flat, barely more than a breath as I lifted the cup. The warmth of the tea did not touch the tight knot coiling in my chest. Each swallow felt like choking on years of questions I had never been allowed to ask. That slurping noise from before echoed in my head, wiping out my appetite.`,
      `After lunch, I moved slowly, careful not to rush. I lifted him from the wheelchair with gentle hands, easing him onto the bed. The mattress creaked under his weight. I tucked the blanket around him and pressed a kiss to his forehead. Then I placed his medication and a glass of water in his hands, the same yellow pill he took after every meal-almost ritualistic.`,
      `The moment the door clicked shut behind me, the hallway stretched out ahead, just like always, but it felt heavier somehow. The faded wallpaper peeled at the corners, hanging onto the walls like it had given up trying. The floorboards creaked beneath my feet, worn thin by years of endless footsteps. Nothing had changed, but the whole house seemed to be holding its breath, waiting for something no one could name.`,
      `That's when something caught my eye, something off in this all-too-familiar house. One floorboard near the corner wasn't lying flat. It was raised just enough to catch the light, like the house was trying to hide something beneath its skin. My heart skipped a beat.`,
      `Whatever was there, it was not meant to be found.`,
    ],
  },
  {
    number: 2,
    unlocked: true,
    preview: "Daniel discovers a loose floorboard hiding a crimson journal belonging to his father - Arthur Gallagher. Inside, he finds entries from 1951 and 1962, revealing a haunted childhood and a mysterious place his father could never escape.",
    text: [
      `I sat down, exhaling slowly, and ran my hand over the floorboards. They were old and tired. The kind that had seen years of footfall, arguments, dropped plates, and the occasional spilled drink no one ever truly cleaned up right. I pressed my fingers against the edge and gave it a tug, expecting resistance, maybe even a fight. But it came off rather easily. Almost like it had been waiting for someone to come along and lift the curtain on whatever was hidden underneath. I thought I'd have to get my tools out for this.`,
      `The space below was deeper than I thought. Darker, too. A crawlspace thick with dust, the kind that clings to your skin, settles in your lungs, makes you wonder what else has been festering down there for God knows how long. Cobwebs stretched across the wood, untouched, undisturbed. Nobody had been down here in years.`,
      `I reached in, my fingers groping through the void, brushing against the splinters and crumbling debris. And then-something smooth. Solid. Not wood. Not metal. Something different.`,
      `I pulled it out, heavier than I'd expected. A book. But, not just any book. This thing had presence. Deep crimson, the cover rich and worn, like the stain of hard candy dissolving on your tongue-thick, vivid, lingering long after the sweetness is gone. The edges frayed just enough to show its age, but the binding-now that was something else. Handmade, precise, the kind of craftsmanship you don't see anymore. Someone cared about this book. Someone needed it to last.`,
      `I turned it over in my hands, feeling the weight of history pressing against my palms. The house was silent, waiting like it knew what came next.`,
      `I opened it.`,
      `Dust erupted from between the pages like a breath held for too long. A fine, ghostly mist curled in the air, catching the dim light in swirling patterns. My sinuses reacted instantly, burning and itching, and before I could even think, I was sneezing hard, one after the other.`,
      `The dust then settled. My vision cleared.`,
      `And there it was.`,
      `A name.`,
      `Arthur Gallagher.`,
      `The room seemed to shrink around me. My hands tightened on the book.`,
      `Dad.`,
      `I never knew he kept a journal. Never pegged him as the type to write anything down, let alone keep something that important buried under the floor, like a relic from a life he wanted to forget.`,
      `I swallowed, my throat dry. The gravity of it, of everything, settled in my lap like an anchor. I should've hesitated. I should've taken a moment to breathe. But no, not now.`,
      `I rushed to the stove, the journal clutched tightly in one hand and set the kettle on. As the water boiled, I poured it over the tea leaves, only to hear a sharp clink. The cup cracked slightly, and tea began leaking out. I watched as the crack crept along the ceramic like a fault line splitting open the earth. The dark liquid seeped out in slow, measured rivulets, pooling on the table in a way that felt almost intentional like the house itself was bleeding like it was trying to tell me something.`,
      `I grabbed another cup, an old one, slightly chipped but still intact, and poured the remains of the tea into it, careful this time. The spill glistened under the dim kitchen light, a tiny, inconsequential mess in the grand scheme of things. But that's how it always starts. The little things. A leaky tap. A door that won't stay shut. A cracked cup. A misplaced memory.`,
      `A name on the cover of a book you didn't know existed.`,
      `I took the cup and the journal, then sat down. This felt like a privilege-an intimate glimpse into my father's life. To me, it was equivalent to treasure, something I intended to guard and cherish for as long as I could.`,
      `Because some things just refuse to stay buried.`,
      `[Journal of Arthur Gallagher]`,
      `February 21st, 1962`,
      `Out the window, the lawn sprawls out in a patchy green, the sunlight streaming in and warming my skin. I'm meant to be writing, and focusing, but the day's got this lazy, golden haze to it that makes it impossible to concentrate.`,
      `It's 11:02 a.m., and though it's winter, the sun is unusually bright. I can almost smell the earth, fresh and damp from the morning dew. But even with all this peace around me, that place still looms, like a shadow I can't outrun. It still haunts me.`,
      `I've spoken to numerous people, they say "Confronting your demons is the path to healing", but how can I be certain I've healed if I can't let go of the past?`,
      `I've tried to be in control, be in the moment. But each time I do, I hope for something new, something different.`,
      `But no matter how much I hope-It all goes back to the very beginning. The never-ending loop of terror.`,
      `Even to this day, I can't sleep at night. It's not the fear of a monster under my bed or the damned 'boogeyman'. It's the silence, it's what hides in the stillness. When you know there's something, you can sense it, but you can't see it. You can only feel its presence.`,
      `That's when "healing" seems beyond reach.`,
      `It's that sense of not knowing and constant unpredictability. People need answers, they need explanations, and some reason to make sense of things. But what if there is no reason? What if some things just happen, with no logic, no meaning? How do you move on from that? How do you let go of something that doesn't want to be let go of?`,
      `I still believe everything that happened to me was real. And I know-I know-that I went through things no child should ever have to endure. But maybe that's just how it was meant to be. Maybe some things aren't meant to be understood. Maybe they just are.`,
      `Sometime in April, 1951`,
      `It had been the first time I was unable to remember Ma's face. The little details like the crease on her forehead when she looks at me all angry or the wrinkles near her eyes when I'd make her laugh, they're all fading away now.`,
      `It's only been about a month since I last saw her, but somehow it feels longer.`,
      `I don't know if I'll ever see her again.`,
      `I read in the paper once that said 'Skin regenerates every two months and with it, touch can be forgotten', I don't want to forget Ma's touch. The thought terrified me. I lived for the warmth of her hugs and the way her hair always smelled like rosemary.`,
      `I missed her, home-everything. Even the smallest things like reading the labels on the soap boxes when I'd take too long in the bathroom or the heat of the water fogging up the mirror. It all seemed too insignificant back then but now this is all I have to hold on to.`,
      `There's no bathroom here. Only a little bucket. I hate the smell of this place. I've never missed home this badly.`,
      `'Lunchtime', a warped voice flared through the speakers.`,
      `I knew what to expect. A dull white plate clattered down the slide and stopped at my feet. The same two pitiful slices of bread lay upon it. On the contrary, a thick layer of jam was smeared across the bread. It was a bright red color against the muted tones of the bread. Yet, it did very little to hide the patchy mold creeping at its edges.`,
      `The feeling in my stomach was unmistakable, I was hungry. Unfortunately, in this case, survival left no room for disgust. I knew the sweetness of the jam wouldn't mask the taste of rot, but it's not like I had another choice. As I crouched down to pick up the plate… I felt it. Eyes.`,
      `Somewhere, I was being watched and studied, like a firefly trapped in a jar. I held onto the plate tightly, looking around the playground. This place was no better than prison.`,
    ],
  },
  {
    number: 3,
    unlocked: true,
    preview: "Young Arthur finds himself trapped in a distorted replica of a playground after following his friend Jack down a tunnel slide. No exits. No people. Just giant speakers, stale bread, and the desperate hope of finding his way back.",
    text: [
      `There were giant speakers that hung above me like vultures waiting for their next meal. The voice that came from them was unnatural-distorted, almost like a broken radio. One could see it tried hard to mimic human speech patterns, but missed the mark entirely. Whatever that noise was, it didn't sound human.`,
      `Had I been kidnapped? Or worse, was I caught up in a sick experiment?`,
      `I didn't know the answer to that, but here's what I did know: I had to get out of there. Some exit. Some loophole. If I could just crack the code of this sick playground, maybe-just maybe-I could break free from this nightmare.`,
      `Every tunnel, every slide was a dead end. Every step forward just took me back to where I started. But I couldn't stop. I couldn't just sit here. No, that's the thing-you can't sit. You can't wait for it to come to you. You've gotta fight. Even if you don't know what the hell you're fighting.`,
      `I would tell myself that if I closed my eyes, if I stayed quiet enough, I could still hear it-the laughter, the way the grass felt under my feet, the way the world didn't feel so small, so impossible.`,
      `But it's like trying to hold on to water. No matter how hard you try, it always slips through. And maybe that's the worst part. Not that things change, but that you never get to say goodbye the way you want to.`,
      `Towards the end of March.`,
      `"Jack!" Aunt Winona shouted as she slung her brown leather bag over her shoulder, the one that always spilled sunflower seeds from the open packets inside it. I could tell she was watching her weight; her usual busty frame had shrunk noticeably. She nibbled on those seeds like it was a big juicy hamburger while sitting on her usual spot on the bench-always had to be on the left side.`,
      `"We've gotta get home before it starts raining!" she said, her voice high with urgency.`,
      `I remember that moment so vividly-the grass under my feet felt incredibly cold and moist, almost like walking over a wet velvet sheet. It was one of those days that felt too perfect to break, where every breath felt light, and even the sky seemed impossibly blue. The very idea of rain seemed absurd.`,
      `"I'll be there in a minute!" Jack called back, already halfway into the tunnel. We'd gone down that old slide so many times I'd lost count.`,
      `"See you on the other side, Art," he whispered, as he vanished down the tunnel. I decided to follow him down. My body lifted for a brief second, almost weightless, like I was defying gravity.`,
      `But the moment I hit the bottom, everything changed.`,
      `The grass beneath my feet was no longer cold. It was rough and plasticky, like those fake grass sheets in stores that look so real but fool no one. The air felt heavy and stale, like a room that had been locked up for years.`,
      `I stepped off the slide and looked around. The bright colors of the playground had dulled, and the sounds of laughter were gone. It was like a cheap replica of the previous one.`,
      `Imagine stepping into a dollhouse where nothing fits correctly. Either the beds are on the ceiling or the lights are on the ground. Where the proportions are undoubtedly wrong, but you can't put your finger on why.`,
      `Everyone disappeared. The kids, the families, Aunt Winona, Jack-everyone. It was like they had been wiped clean from existence, leaving me trapped in a snow globe. Only in this case, it was a playground.`,
      `At first, it seemed like a dream come true. No one to tell me what to do, no rules, just endless playtime. What else would you expect from an 8-year-old?`,
      `But the thing is, there's only so much time a kid can spend in a place like this. It's like throwing a fish into a tank and telling it to swim forever-no sleep, no rest, just endless motion. It doesn't take long before the desperation kicks in.`,
      `I turned toward the exit, thinking maybe there was a way out. But a massive wall just stood there. Like the universe itself saying, "You're not going anywhere."`,
      `Thinking of the first day, I remember it was all hazy, and surreal. I thought if I just went to sleep, I'd wake up in my bed. This was all just some bad dream, like those soap operas where the lead wakes up and everything's fine.`,
      `But no. In this place, sleep didn't bring reality. No matter how badly I craved it.`,
      `I bit into the stale bread, its taste like nibbling on cardboard soaked in misery, and glanced up at the sky, searching for a way out. I scoured every corner, every tunnel, every slide. But all I could find were those giant speakers and their static-laced whispers. The slides and swings were frozen in place, their once-vibrant colors now muted against the dull gray ground. The lawn beneath them was too perfect, each blade of grass oddly uniform, like someone measured them with a ruler.`,
      `I took a deep breath and turned back to the slide. My heart thumped, a cocktail of dread and hope mixing in my chest. I closed my eyes and whispered, "I'll see you on the other side, Jack." The moment my feet hit the ground, the speakers erupted with a loud, distorted screech, a relentless noise that rattled me to my bones.`,
      `I stood there, heart racing, engulfed in the chaos of noise and emptiness. Is any of this real? Or am I still trapped in a dream? The line between reality and nightmare had blurred so much I couldn't tell anymore.`,
      `"Squeak!"`,
      `My breath caught, my throat clenching, tight as a noose. I turned, slowly, like something inside me knew, like it could already feel what was coming. The hair on the back of my neck stood up, prickling with that raw, crawling sensation. Thirst hit me, sharp, but it wasn't water I needed-it was the source of that sound. I had to know.`,
      `Jack?`,
      `I scrambled to my feet and sprinted toward the other slide, struggling to keep my balance. And there he was.`,
      `The same beige shorts clung to his long, pale legs. The tiny hair on his legs glinted like fireflies in the dim light. His navy blue and green striped shirt hugged his frame, while his freshly buzzed brown hair caught the light just enough to be noticed.`,
      `But I couldn't see his face. Shadows covered it, the roof of the tunnel blocking any chance of recognition. The one thing that could've told me who he was-gone. Just a blur, a silhouette, leaving me in the dark with nothing but the feeling that I should know him.`,
      `"Jack!", I screamed at the top of my lungs, my voice raw and broken.`,
      `He slid down the tunnel, his feet thudding dully against the ground. I knew it had to be him. The clothes, the hair, the frame-it was all him.`,
      `It was Jack.`,
    ],
  },
]

export default function BookChapters() {
  const [reading, setReading] = useState(null)

  const openChapter = (num) => setReading(num)
  const closeReader = () => setReading(null)

  const currentChapter = chapters.find((c) => c.number === reading)

  return (
    <section id="book" className="section">
      <div className="book">
        <div className="book__layout">
          <div className="book__info">
            <span className="section-label reveal">Book</span>
            <h2 className="section-title reveal stagger-1">Beyond the<br /><em>Walls</em></h2>
            <div className="book__badge reveal stagger-2">
              <span className="book__badge-dot" />
              Work in Progress
            </div>
            <p className="book__desc reveal stagger-3">
              The walls always close in eventually.<br />
              The only question is what's left when they do.
            </p>
            <p className="book__meta reveal stagger-4">
              By Sanskriti Birange &bull; Fiction &bull; 89 Pages
            </p>
          </div>

          <div className="book__cover-wrap reveal-right stagger-2">
            <div className="book__cover">
              <div className="book__cover-spine" />
              <div className="book__cover-front">
                <BookOpen size={40} strokeWidth={1.2} />
                <h3>Beyond the Walls</h3>
                <span>Sanskriti Birange</span>
                <div className="book__cover-wip">WIP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="book__chapters">
          <h3 className="book__chapters-title">Preview Chapters</h3>
          {chapters.map((ch) => (
            <button
              className="book__chapter"
              key={ch.number}
              onClick={() => openChapter(ch.number)}
            >
              <div className="book__chapter-left">
                <span className="book__chapter-num">0{ch.number}</span>
                <div>
                  <span className="book__chapter-label">Chapter {ch.number}</span>
                  <p className="book__chapter-preview">{ch.preview}</p>
                </div>
              </div>
              <ArrowRight size={18} className="book__chapter-arrow" />
            </button>
          ))}
          <div className="book__locked">
            <Lock size={16} />
            <span>Remaining chapters will be unlocked upon publication</span>
          </div>
        </div>
      </div>

      {currentChapter && (
        <ChapterReader
          chapter={currentChapter}
          onClose={closeReader}
          onPrev={reading > 1 ? () => setReading(reading - 1) : null}
          onNext={reading < 3 ? () => setReading(reading + 1) : null}
          totalChapters={3}
        />
      )}

      <style>{`
        .book .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .book__layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 64px;
          align-items: center;
          margin-bottom: 72px;
        }
        .book__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 8px 18px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .book__badge-dot {
          width: 7px;
          height: 7px;
          background: #f59e0b;
          border-radius: 50%;
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .book__desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .book__meta {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .book__cover-wrap {
          perspective: 800px;
        }
        .book__cover {
          width: 260px;
          margin: 0 auto;
          position: relative;
          transform: rotateY(-8deg);
          transition: transform 0.6s ease;
        }
        .book__cover:hover {
          transform: rotateY(0deg);
        }
        .book__cover-spine {
          position: absolute;
          left: -12px;
          top: 4px;
          bottom: 4px;
          width: 12px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 2px 0 0 2px;
          transform: rotateY(40deg);
          transform-origin: right;
        }
        .book__cover-front {
          aspect-ratio: 3/4.2;
          background: linear-gradient(145deg, #0f0f23 0%, #1a1a3e 40%, #16213e 100%);
          border-radius: 4px 12px 12px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 28px;
          color: white;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .book__cover-front svg { margin-bottom: 24px; opacity: 0.6; }
        .book__cover-front h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .book__cover-front span {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .book__cover-wip {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 0.6rem;
          font-weight: 800;
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.15);
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.1em;
        }
        .book__chapters-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 16px;
        }
        .book__chapter {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 28px;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          text-align: left;
          color: var(--color-text);
          transition: all var(--transition);
        }
        .book__chapter:hover {
          border-color: var(--color-accent);
          background: var(--color-bg-card);
          transform: translateX(4px);
        }
        .book__chapter:hover .book__chapter-arrow {
          color: var(--color-accent);
          transform: translateX(4px);
        }
        .book__chapter-left {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .book__chapter-num {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-accent);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--color-accent-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .book__chapter-label {
          font-size: 1rem;
          font-weight: 700;
          font-family: var(--font-display);
          display: block;
          margin-bottom: 6px;
        }
        .book__chapter-preview {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .book__chapter-arrow {
          color: var(--color-text-muted);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .book__locked {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 16px 0 0;
        }
        @media (max-width: 768px) {
          .book__layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .book__cover { width: 200px; }
        }
      `}</style>
    </section>
  )
}
