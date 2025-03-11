import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SuggestedArticles } from "@/components/suggested-articles";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import image4 from "../../../images/image4.jpg";
import image5 from "../../../images/image5.jpg";
import image6 from "../../../images/image6.jpg";
import image7 from "../../../images/image7.png";
import image8 from "../../../images/image8.png";
import profile2 from "../../../images/profile4.jpg";
import image9 from "../../../images/image9.jpg";
import image10 from "../../../images/image10.jpg";

// Sample article data
const article = {
  title: "Reply Gang Faces Massive Losses Due to Global X Outrage",
  category: "Social Media",
  image: image8,
  author: {
    name: "Shahzad Khan",
    avatar: profile2,
  },
  date: new Date(2025, 3, 11),
};

// Sample suggested articles
const suggestedArticles = [
  {
    title: "Influencer in Crisis: 'My Phone Died During a Viral Moment'",
    description:
      "Local content creator shares harrowing tale of how a dead battery cost them thousands of potential followers.",
    category: "Social Media",
    image: image2,
    slug: "influencer-phone-crisis",
    date: new Date(2024, 2, 14),
  },
  {
    title: "Man Spends 72 Hours Crafting 'Perfect' Comment, Gets Zero Likes",
    description:
      "A heartbreaking story of internet validation and the pursuit of the perfect witty response.",
    category: "Social Media",
    image: image4,
    slug: "perfect-comment-zero-likes",
    date: new Date(2024, 2, 13),
  },
  {
    title:
      "Study Shows 97% of Internet Arguments Could Be Avoided By Simply Logging Off",
    description:
      "Researchers confirm what we all suspected: most online debates are completely unnecessary.",
    category: "Technology",
    image: image5,
    slug: "internet-arguments-study",
    date: new Date(2024, 2, 12),
  },
];

// Define props interface for the dynamic route
interface PageProps {
  params: Promise<{ slug: string }>
}

// Make component async to handle the Promise-wrapped params
export default async function ArticlePage({ params }: PageProps) {
  // Await the params to get the slug
  const { slug } = await params;

  // Here you could fetch article data based on the slug if it were dynamic
  // For now, we're using static data
  // Example: const article = await fetchArticle(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="container max-w-4xl mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col gap-4">
            <Badge className="w-fit">{article.category}</Badge>
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={article.author.avatar.src} // Convert StaticImageData to string
                  alt={article.author.name}
                />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-foreground">
                  {article.author.name}
                </span>
                <time>
                  2 hours ago
                </time>
              </div>
            </div>

            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p>
                Yesterday, the world witnessed a disaster unlike any other – an{" "}
                <em>unprecedented</em> global X outage. It wasn't just any
                outrage, this was a financial <em>crisis</em> for the reply guys
                of the internet. X was down multiple times, and in the blink of
                an eye, Mr. Kutkutjiya (name changed to protect his dignity) and
                Mr. Bholu (also an alias) found themselves staring at
                astronomical losses – not in dollars, but in <em>replies</em>.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                <Image
                  src={image9}
                  alt="A person dramatically looking at the sky"
                  fill
                  className="object-cover"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Mr. Kutkutjiya staring at his phone during the outage
                </p>
              </div>

              <p>
                In an exclusive interview with <em>Shahzad Times</em>, Mr.
                Kutkutiya revealed the shocking truth: "I usually make 1000
                replies a day. That's like my bread and butter. 1000 replies
                equals <em>income</em>. But yesterday, I couldn't even hit 100.
                My account analytics took a nosedive – like a stock market
                crash, but worse. It was <em>devastating</em>."
              </p>

              <p>
                He went on to describe the initial signs of the disaster:
                "Around 1 PM IST, I noticed something was off. I thought it was
                just a glitch – like when your phone's battery drops to 1%. So I
                called my internet provider. They said, 'Everything's fine on
                our end.' But I wasn't convinced. I needed answers. I called my
                69-year-old uncle, who spends his days glued to Instagram reels,
                and he confirmed that <em>everything</em> on his side was fine."
              </p>

              <p>
                But the problem wasn't with the internet. It was <em>X</em>{" "}
                itself – <em>the platform</em> that was supposed to be his
                lifeline.
              </p>

              <p>
                Mr. Kutkutiya continued, his voice trembling with emotion: "This
                is worse than any financial collapse I've ever seen. I've had
                setbacks in life – sure – but nothing hits harder than losing{" "}
                <em>replies</em>. If I can't reply, I can't <em>earn</em>. Do
                you know how many witty comments I've missed out on? How many
                trending hashtags I couldn't take over? This is a{" "}
                <em>global crisis</em> for us reply guys."
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">
                Meanwhile, Across the Internet...
              </h2>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                <Image
                  src={image7}
                  alt="A person dramatically looking at the sky"
                  fill
                  className="object-cover"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Mr. Bholu frantically switching between devices during the
                  outage
                </p>
              </div>

              <p>
                A few hours later, in another corner of the online world, Mr.
                Bholu (real name hidden for privacy) was experiencing a similar
                fate. "I was doing my usual 800 replies per day. You know, the
                usual hustle. But yesterday, the unthinkable happened," he
                shared with <em>Shahzad Times</em>, voice barely audible through
                the phone. "My replies just vanished into thin air. Like money
                disappearing into a black hole, but it was <em>replies</em> –
                and that's worse."
              </p>

              <p>
                Mr. Bholu's experience mirrored Mr. Kutkutiya's in many ways. "I
                noticed around 3 PM that X was acting up. I thought my Wi-Fi was
                playing games, so I switched from my phone to my laptop. Still,
                no luck. I called my internet provider and even had a full tech
                session with my 12-year-old cousin who is obsessed with playing
                games online. After hours of troubleshooting, I realized the
                problem wasn't <em>me</em>. It was <em>X</em>."
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                <Image
                  src={image10}
                  alt="Reply Gang Support Group"
                  fill
                  className="object-cover"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Reply Gang Support Group formed after the devastating outage
                </p>
              </div>

              <p>
                He continued, sounding defeated: "I was supposed to hit 800
                replies yesterday, but I barely made it to 50. This isn't just a
                loss in replies – it's a <em>loss of potential</em>. My
                engagement was <em>ruined</em>, my analytics <em>crashed</em>.
                It was like a sudden recession, but for my reply career."
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                <Image
                  src={image3}
                  alt="Mr. Kutkutjiya contemplating his future"
                  fill
                  className="object-cover"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Mr. Kutkutjiya contemplating his future after the X outage
                </p>
              </div>

              <p>
                Both Mr. Kutkutiya and Mr. Bholu agreed that this <em>X</em>{" "}
                outage was a personal tragedy. Mr. Kutkutiya had this final
                thought: "Forget COVID-19. Forget financial crashes. This X
                outage – it's a disaster that will echo through the ages. My
                losses are in <em>replies</em>, but the impact is worldwide. The{" "}
                <em>reply</em> economy is <em>down</em>."
              </p>
            </div>
          </div>
        </article>
        <SuggestedArticles articles={suggestedArticles} />
      </main>
      <Footer />
    </div>
  );
}