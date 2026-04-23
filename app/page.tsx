"use client";
import { useState, useEffect } from "react";

/* ═══ Small Helpers ═══ */
const GoldArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{flexShrink:0}}>
    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const Diamond = () => <span style={{color:"var(--gold)",fontSize:7,flexShrink:0}}>◆</span>;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const NAV = ["Strategy", "Programs", "About"];

  return (
    <>
      {/* ══════ NAV ══════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(6,6,6,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="gd" style={{fontFamily:"'Instrument Serif',serif",fontSize:28,fontWeight:400,lineHeight:1}}>FK</span>
            <span style={{width:1,height:20,background:"var(--border)"}}/>
            <span className="mono" style={{fontSize:10,letterSpacing:".14em",color:"var(--text-3)",textTransform:"uppercase"}}>Consulting</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV.map(n=>(
              <a key={n} href={`#${n.toLowerCase()}`}
                className="mono transition-colors"
                style={{fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--text-3)"}}
                onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
                onMouseLeave={e=>e.currentTarget.style.color="var(--text-3)"}
              >{n}</a>
            ))}
            <a href="#apply" className="btn-primary" style={{padding:"10px 24px",fontSize:12}}>Get Started</a>
          </div>
          <button className="md:hidden p-2" onClick={()=>setMobileNav(!mobileNav)}>
            <div className="flex flex-col gap-1.5">
              <span style={{display:"block",width:20,height:1.5,background:"var(--gold)"}}/>
              <span style={{display:"block",width:14,height:1.5,background:"var(--gold)"}}/>
            </div>
          </button>
        </div>
        {mobileNav && (
          <div className="md:hidden px-8 pb-6 flex flex-col gap-4" style={{background:"rgba(6,6,6,0.98)"}}>
            {NAV.map(n=>(
              <a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMobileNav(false)}
                style={{color:"var(--text-2)",fontSize:14,fontWeight:400}}>{n}</a>
            ))}
            <a href="#apply" className="btn-primary text-center" style={{fontSize:12}}>Get Started</a>
          </div>
        )}
      </nav>

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32" style={{paddingTop:140}}>
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{
          top:"-20%",right:"-10%",width:800,height:800,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 65%)"
        }}/>
        <div className="absolute pointer-events-none" style={{
          bottom:"0",left:"-15%",width:600,height:600,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(201,168,76,0.03) 0%,transparent 65%)"
        }}/>

        <div className="max-w-5xl mx-auto px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            {/* Left column */}
            <div className="md:col-span-8">
              <div className="chip enter mb-8">For W-2 earners · $150K+</div>

              <h1 className="enter d1" style={{
                fontFamily:"'Instrument Serif',serif",
                fontSize:"clamp(44px,7.5vw,96px)",
                fontWeight:400,lineHeight:.95,letterSpacing:"-0.02em",
                marginBottom:32
              }}>
                Your income is <br className="hidden md:block"/>
                <span className="gd" style={{fontStyle:"italic"}}>building the IRS&apos;s</span>
                <br/>
                wealth. Not yours.
              </h1>

              <p className="enter d2" style={{
                fontSize:"clamp(15px,1.6vw,18px)",
                color:"var(--text-2)",lineHeight:1.75,maxWidth:500,marginBottom:40
              }}>
                A tax-strategic Turo business gives high-income W-2 earners what their paycheck can&apos;t —
                depreciation write-offs, passive revenue, and a real path to keeping more of what they earn.
              </p>

              <div className="flex flex-wrap gap-3 enter d3">
                <a href="#apply" className="btn-primary">Apply for Coaching <GoldArrow/></a>
                <a href="#strategy" className="btn-ghost">See the Strategy</a>
              </div>
            </div>

            {/* Right column — stats */}
            <div className="md:col-span-4 flex flex-col gap-6 enter d4">
              {[
                {val:"22",label:"Vehicle fleet built from zero"},
                {val:"$37K+",label:"Avg. W-2 tax reduction, year one"},
                {val:"5+ yrs",label:"Operating & coaching experience"},
              ].map(({val,label})=>(
                <div key={val} style={{borderLeft:"2px solid var(--gold-dark)",paddingLeft:20}}>
                  <div className="gd" style={{fontFamily:"'Instrument Serif',serif",fontSize:32,fontWeight:400,lineHeight:1.1}}>{val}</div>
                  <div style={{fontSize:13,color:"var(--text-3)",marginTop:4,lineHeight:1.4}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PROBLEM ══════ */}
      <section style={{background:"var(--surface)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"100px 24px"}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="chip mb-6">The Problem</div>
              <h2 className="serif" style={{fontSize:"clamp(32px,4.5vw,52px)",lineHeight:1,marginBottom:24}}>
                High earners pay <span className="gd" style={{fontStyle:"italic"}}>the most</span> and deduct <span className="gd" style={{fontStyle:"italic"}}>the least</span>
              </h2>
              <p style={{color:"var(--text-2)",lineHeight:1.8,fontSize:15}}>
                At $150K–$500K+, you&apos;re in the highest marginal brackets with almost zero shelter. No depreciation.
                No business expenses. No entity structure. Just a massive check to the IRS — every single year.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {num:"37%+",label:"Effective tax rate on high W-2 income"},
                {num:"$0",label:"Business deductions available to employees"},
                {num:"$0",label:"Depreciation write-offs without a business"},
                {num:"∞",label:"Growth potential you're leaving on the table"},
              ].map(({num,label})=>(
                <div key={num} className="card p-6" style={{position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,var(--gold-dark),transparent)"}}/>
                  <div className="gd" style={{fontFamily:"'Instrument Serif',serif",fontSize:28,lineHeight:1.1,marginBottom:8}}>{num}</div>
                  <div style={{fontSize:12,color:"var(--text-3)",lineHeight:1.5}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STRATEGY ══════ */}
      <section id="strategy" style={{padding:"120px 24px"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="chip mb-6">The Firstkontak Method</div>
            <h2 className="serif" style={{fontSize:"clamp(36px,5vw,60px)",lineHeight:1}}>
              Three phases to a <span className="gd" style={{fontStyle:"italic"}}>tax-strategic</span> Turo business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{background:"var(--border)",border:"1px solid var(--border)"}}>
            {[
              {
                n:"01",title:"Structure",sub:"Entity & tax foundation",
                points:["LLC formation & operating agreements","EIN, business banking, credit","MACRS bonus depreciation strategy","Bookkeeping & expense systems"],
              },
              {
                n:"02",title:"Acquire",sub:"The right vehicles, right price",
                points:["Vehicle profile that maximizes ROI","Copart, dealer & private sourcing","Cost-basis & insurance structure","Fleet naming & documentation"],
              },
              {
                n:"03",title:"Launch",sub:"Operations & scale",
                points:["5-star Turo listing framework","Dynamic pricing & yield management","Remote fleet management systems","Scale milestones: 1→5→10 vehicles"],
              },
            ].map(({n,title,sub,points})=>(
              <div key={n} className="group" style={{background:"var(--surface)",padding:"48px 36px",position:"relative"}}>
                <div style={{
                  position:"absolute",top:24,right:28,
                  fontFamily:"'Instrument Serif',serif",fontSize:80,lineHeight:1,
                  color:"rgba(201,168,76,0.05)"
                }}>{n}</div>
                <div className="mono" style={{fontSize:10,letterSpacing:".12em",color:"var(--gold)",textTransform:"uppercase",marginBottom:16}}>{sub}</div>
                <h3 className="serif" style={{fontSize:32,marginBottom:20}}>{title}</h3>
                <div className="flex flex-col gap-3">
                  {points.map(p=>(
                    <div key={p} className="flex items-start gap-3" style={{fontSize:13,color:"var(--text-2)",lineHeight:1.5}}>
                      <Diamond/><span style={{marginTop:-2}}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="text-center mt-1 py-10 px-8" style={{
            background:"linear-gradient(135deg,rgba(139,105,20,0.12),rgba(201,168,76,0.04))",
            border:"1px solid var(--border)",borderTop:"none"
          }}>
            <p className="serif" style={{fontSize:"clamp(18px,2.5vw,24px)",fontStyle:"italic",color:"var(--gold-light)",lineHeight:1.5}}>
              A single properly depreciated vehicle can generate $15K–$40K in first-year deductions.
            </p>
            <p className="mono" style={{fontSize:10,color:"var(--text-3)",marginTop:8,letterSpacing:".08em"}}>
              Based on Bonus Depreciation Rules · Consult your CPA
            </p>
          </div>
        </div>
      </section>

      {/* ══════ PROGRAMS ══════ */}
      <section id="programs" style={{background:"var(--surface)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"120px 24px"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="chip mb-6">Programs</div>
            <h2 className="serif" style={{fontSize:"clamp(36px,5vw,56px)",lineHeight:1}}>
              Choose your <span className="gd" style={{fontStyle:"italic"}}>path</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name:"Turo Business in a Box",tier:"Self-Study Course",
                desc:"The complete A-to-Z blueprint — entity setup, vehicle acquisition, listing optimization, tax strategy — at your own pace.",
                features:["Full launch framework","Vehicle acquisition playbook","MACRS depreciation guide","Listing & pricing templates","Tax strategy foundation"],
                cta:"Enroll Now",featured:false,
              },
              {
                name:"Turo 5000 Coach",tier:"1-on-1 Coaching",
                desc:"Work directly with Maurice to build your first $5,000/month Turo income stream with private strategy sessions and full accountability.",
                features:["Private coaching sessions","Custom vehicle & market strategy","Tax planning with your CPA","Fleet management systems","Ongoing access & accountability"],
                cta:"Apply Now",featured:true,
              },
              {
                name:"Kingdom Legacy",tier:"Faith + Wealth",
                desc:"For the faith-driven entrepreneur — biblical stewardship, generational wealth principles, and Turo as the vehicle for kingdom impact.",
                features:["Faith-based business framework","Stewardship & wealth theology","Family legacy planning","Business as ministry model","Community access"],
                cta:"Learn More",featured:false,
              },
            ].map(({name,tier,desc,features,cta,featured})=>(
              <div key={name} className="card flex flex-col" style={{
                padding:"40px 32px",position:"relative",
                background:featured ? "linear-gradient(160deg,rgba(139,105,20,0.2),var(--surface))" : "var(--surface)",
                borderColor:featured ? "var(--border-hover)" : undefined,
              }}>
                {featured&&(
                  <div className="mono" style={{
                    position:"absolute",top:-1,right:24,
                    background:"linear-gradient(135deg,var(--gold-dark),var(--gold))",
                    color:"var(--obsidian)",padding:"4px 12px",
                    fontSize:9,letterSpacing:".1em",textTransform:"uppercase",fontWeight:600,
                  }}>Flagship</div>
                )}
                <div className="mono" style={{fontSize:10,letterSpacing:".12em",color:"var(--gold)",textTransform:"uppercase",marginBottom:12}}>{tier}</div>
                <h3 className="serif" style={{fontSize:26,marginBottom:8,lineHeight:1.15}}>{name}</h3>
                <p style={{fontSize:14,color:"var(--text-3)",lineHeight:1.7,marginBottom:24}}>{desc}</p>
                <div className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map(f=>(
                    <div key={f} className="flex items-start gap-3" style={{fontSize:13,color:"var(--text-2)"}}>
                      <Diamond/><span style={{marginTop:-2}}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#apply" className={featured ? "btn-primary text-center justify-center" : "btn-ghost text-center justify-center"}>
                  {cta}
                </a>
              </div>
            ))}
          </div>

          {/* Mini courses */}
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {[
              {name:"Business Credit Blueprint",price:"$49",desc:"Build fundable business credit in 90 days."},
              {name:"Wife Made Course",price:"Soon",desc:"For the spouse ready to build her own income stream."},
              {name:"Whole Life Business Kit",price:"Bundle",desc:"Entity docs, bookkeeping, listing scripts & more."},
            ].map(({name,price,desc})=>(
              <div key={name} className="card px-8 py-5 flex items-center justify-between gap-4">
                <div>
                  <div style={{fontSize:14,fontWeight:500,marginBottom:2}}>{name}</div>
                  <div style={{fontSize:12,color:"var(--text-3)"}}>{desc}</div>
                </div>
                <div className="mono gd" style={{fontSize:13,flexShrink:0,fontWeight:500}}>{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section id="about" style={{padding:"120px 24px"}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Monogram */}
            <div className="md:col-span-5">
              <div className="card flex items-center justify-center" style={{
                aspectRatio:"1/1.1",
                background:"linear-gradient(160deg,var(--surface-2),var(--surface))",
                position:"relative",overflow:"hidden"
              }}>
                <div className="gd" style={{
                  fontFamily:"'Instrument Serif',serif",fontSize:"min(220px,30vw)",
                  fontWeight:400,opacity:.2,position:"absolute",lineHeight:1
                }}>FK</div>
                <div style={{position:"relative",textAlign:"center",padding:40}}>
                  <div className="serif" style={{fontSize:"clamp(20px,2.5vw,28px)",lineHeight:1.4,fontStyle:"italic",marginBottom:16}}>
                    &ldquo;I built a 22-car fleet while working full time. Now I teach exactly what worked.&rdquo;
                  </div>
                  <div className="mono" style={{fontSize:10,color:"var(--text-3)",letterSpacing:".1em",textTransform:"uppercase"}}>
                    Maurice Goring
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-7">
              <div className="chip mb-6">Your Coach</div>
              <h2 className="serif" style={{fontSize:"clamp(32px,4vw,48px)",lineHeight:1,marginBottom:24}}>
                Maurice Goring
              </h2>
              <p style={{color:"var(--text-2)",lineHeight:1.8,fontSize:15,marginBottom:16}}>
                Built a 22-vehicle Turo fleet from scratch while working full-time — generating
                substantial annual revenue and using the business to strategically reduce his W-2 
                tax burden through proper entity structuring, MACRS depreciation, and business expense management.
              </p>
              <p style={{color:"var(--text-2)",lineHeight:1.8,fontSize:15,marginBottom:32}}>
                Now operating a focused Mini Cooper fleet through Firstkontak Consulting Inc., Maurice 
                hands his exact blueprint to high-income earners who are ready to stop paying the 
                government&apos;s price for their success. His approach is grounded in biblical principles of stewardship — 
                wealth is a tool, business is a calling, and legacy matters.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {[
                  {k:"Experience",v:"5+ Years Fleet Ops"},
                  {k:"Peak Fleet",v:"22 Vehicles"},
                  {k:"Foundation",v:"Faith-Based"},
                  {k:"Based In",v:"San Diego, CA"},
                ].map(({k,v})=>(
                  <div key={k} style={{borderLeft:"2px solid var(--gold-dark)",paddingLeft:16}}>
                    <div className="mono" style={{fontSize:10,color:"var(--text-3)",letterSpacing:".08em",textTransform:"uppercase"}}>{k}</div>
                    <div style={{fontSize:15,fontWeight:500,marginTop:2}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ APPLY / CONTACT ══════ */}
      <section id="apply" style={{background:"var(--surface)",borderTop:"1px solid var(--border)",padding:"120px 24px"}}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <div className="chip mb-6">Get Started</div>
            <h2 className="serif" style={{fontSize:"clamp(36px,5vw,52px)",lineHeight:1,marginBottom:16}}>
              Ready to keep <span className="gd" style={{fontStyle:"italic"}}>your money</span>?
            </h2>
            <p style={{color:"var(--text-2)",lineHeight:1.7,maxWidth:420,margin:"0 auto"}}>
              Apply for coaching or tell us where you are in your journey. We respond within 24 hours.
            </p>
          </div>

          <div className="card p-10 md:p-12">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="mono" style={{fontSize:10,letterSpacing:".1em",color:"var(--text-3)",display:"block",marginBottom:6,textTransform:"uppercase"}}>First Name</label>
                <input type="text" placeholder="John"/>
              </div>
              <div>
                <label className="mono" style={{fontSize:10,letterSpacing:".1em",color:"var(--text-3)",display:"block",marginBottom:6,textTransform:"uppercase"}}>Last Name</label>
                <input type="text" placeholder="Smith"/>
              </div>
            </div>
            <div className="mb-4">
              <label className="mono" style={{fontSize:10,letterSpacing:".1em",color:"var(--text-3)",display:"block",marginBottom:6,textTransform:"uppercase"}}>Email</label>
              <input type="email" placeholder="john@company.com"/>
            </div>
            <div className="mb-4">
              <label className="mono" style={{fontSize:10,letterSpacing:".1em",color:"var(--text-3)",display:"block",marginBottom:6,textTransform:"uppercase"}}>W-2 Income</label>
              <select>
                <option value="">Select range</option>
                <option>$100K – $150K</option>
                <option>$150K – $250K</option>
                <option>$250K – $400K</option>
                <option>$400K+</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="mono" style={{fontSize:10,letterSpacing:".1em",color:"var(--text-3)",display:"block",marginBottom:6,textTransform:"uppercase"}}>Your Goal</label>
              <textarea rows={3} placeholder="Reduce taxes, generate passive income, or both?"/>
            </div>
            <button className="btn-primary w-full justify-center" style={{padding:"16px 32px"}}>
              Submit Application <GoldArrow/>
            </button>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer style={{borderTop:"1px solid var(--border)",padding:"48px 24px 36px",background:"var(--obsidian)"}}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-2.5">
              <span className="gd" style={{fontFamily:"'Instrument Serif',serif",fontSize:28,fontWeight:400,lineHeight:1}}>FK</span>
              <span style={{width:1,height:20,background:"var(--border)"}}/>
              <div>
                <div style={{fontSize:13,fontWeight:500,lineHeight:1}}>Firstkontak Consulting</div>
                <div className="mono" style={{fontSize:9,color:"var(--text-3)",letterSpacing:".08em",lineHeight:1,marginTop:2}}>San Diego, CA</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              {["Strategy","Programs","About","Apply"].map(n=>(
                <a key={n} href={`#${n.toLowerCase()}`} className="mono transition-colors"
                  style={{fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:"var(--text-3)"}}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
                  onMouseLeave={e=>e.currentTarget.style.color="var(--text-3)"}
                >{n}</a>
              ))}
            </div>
          </div>
          <div style={{borderTop:"1px solid var(--border)",paddingTop:24}} className="flex flex-col md:flex-row justify-between gap-4">
            <div className="mono" style={{fontSize:10,color:"var(--text-3)",letterSpacing:".06em"}}>
              © {new Date().getFullYear()} Firstkontak Consulting Inc. All rights reserved.
            </div>
            <div className="mono" style={{fontSize:10,color:"rgba(201,168,76,0.25)",letterSpacing:".06em"}}>
              Results not guaranteed · Consult a licensed CPA
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
