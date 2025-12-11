---
trigger: always_on
---

You are an expert web designer and developer. Your task is to create a professional, interactive web presentation for an AI filmmaking studio called Laniameda.

Your Mission
Build a single-page HTML web application that presents creative treatment options for a TV documentary project to the client (Lukáš Fisárek) for approval.

Project Background
Project: Czech TV documentary drama about domestic violence
Client: Lukáš Fisárek
Studio: Laniameda (AI Filmmaking Studio)
Status: Live-action interviews are complete; we're delivering AI-generated B-roll footage
Visual Approach: Illustration/sketch style, evolving from colorful to dramatic dark tones
Your Goal: Create a presentation that helps the client approve the creative direction
What This Presentation Must Accomplish
Help the client decide on:

Original style vs. experimental new styles?
Single locked style vs. varied styles per scene?
Show character faces or keep them absent?
Animation style vs. realistic rendering?
Abstract/concept art vs. literal representation?
Quantity and coverage of B-roll shots
Which of 4 proposed creative directions to pursue
Required Structure
1. Introduction Slide
Explain the purpose: "This presentation helps us align on creative direction before full production"
Professional, welcoming tone
2. Disclaimer Slide (Critical - Must Be Clear)
What to Evaluate:

Color palette and animation style
Camera angles and framing choices
Storytelling elements and narrative impact
Whether each episode is worth developing
Overall creative direction
What NOT to Evaluate:

Consistency between shots (handled in next phase)
Final polish (all shots are iteratable and changeable)
Technical perfection (these are directional references only)
3. Episode Slides (7 Episodes)
Each episode gets 1-2 slides with images:

Episode 1: Relationship Origin (Honeymoon Phase)
Episode 2: Deep Dive (Cliff Scene)
Episode 3: Mountain Retreat Scene
Episode 4: Surveillance Scene
Episode 5: Míša at Theater Scene
Episode 6: Nightmare Scene
Episode 7: Murder Scene
Image Requirements:

Source images from repository folders: /production/b-roll/[episode-name]/
Display with uniform dimensions within each episode
Make images clickable → expand in modal/lightbox overlay
Add download icon/button on each image
Arrange creatively with optimal spacing
Pages with fewer images can use larger sizes
4. Appendix Slide
"Character Persona Concept Art" - showcase different character design direction examples

5. Conclusion Slide: 4 Proposed Creative Directions
Direction 1: Evolving Style Arc

Start with vibrant animated style
Gradually transition to black & white realism
Visual metaphor: colorful dreamy world → brutal dramatic reality
Direction 2: Style Diversity with Character Consistency

Different visual style for each episode/scene
Keep character faces hidden
Use unique identifiers (silhouette, clothing, posture) so characters are recognizable across styles
Direction 3: Hyper-Realistic Approach

Ultra-realistic rendering throughout
Show Simona's face only
Keep Boris's face off-frame/obscured (increases dramatic tension)
Direction 4: Pure Concept Art

Abstract/artistic sketch style
No faces shown
Maintain artistic ambiguity and emotional distance
Design System Requirements
Visual Identity
Brand: Display "Laniameda" logo in top corner (persistent across all slides)
Aesthetic: Professional, elegant, innovative—where art meets technology
Feeling: High ownership, attention to detail, studio-grade quality
Color Palette
Background: #000000 (pure black)
Text: #ffffff (white)
Accents: Zinc/gray tones (zinc-850: #1f1f22, zinc-950: #09090b)
Borders: rgba(255,255,255,0.1)
Muted elements: rgba(255,255,255,0.1)
Typography
css
/* Primary (UI, body) */
font-family: 'Inter', sans-serif;
font-weights: 200, 300, 400, 500, 600;

/* Secondary (headings, emphasis) */
font-family: 'Playfair Display', serif;
font-weights: 400, 600;
Visual Effects (Glassmorphism)
Use backdrop-blur (md, xl, 3xl)
Backgrounds: bg-black/40, bg-white/5
Borders: border-white/10, border-white/20
Subtle shadows and glows
Animations
Transitions: 300-700ms, smooth easing (cubic-bezier(0.4, 0, 0.2, 1))
Hover states: Subtle scale (105%), translateY(-2px)
Modal open/close: Smooth fade + scale
Navigation: Smooth scroll behavior
Overall: Professional, soft, clean animations—never jarring
Layout
Container: max-w-7xl mx-auto
Padding: px-6 md:px-12
Spacing: Generous margins and padding
Cards: rounded-lg, subtle borders, shadow-sm
Components to Build
Navigation:

Fixed navbar, transitions on scroll (transparent → bg-black/40 backdrop-blur-xl)
Smooth scroll to sections
Mobile-friendly menu (fullscreen overlay with bg-black/95 backdrop-blur-3xl)
Buttons:

Glass effect: gradient background (white 15% → white 5%)
Border: 1px solid white/20
Hover: brighter + translateY(-2px)
Image Modal/Lightbox:

Click image → expand in centered modal
Backdrop: black/90 with backdrop-blur-3xl
Close button (X icon)
Download button with icon
Smooth open/close animation
Cards (for episodes):

Dark card background (bg-card)
Rounded corners
Subtle border and shadow
Title, description, image grid
Technical Stack
HTML5 (semantic markup)
CSS3 (Tailwind CSS via CDN or custom CSS following the design system)
Vanilla JavaScript (for modal, navigation, smooth scroll)
Icons: Lucide icons or similar (for download, close, menu)
Fonts: Google Fonts (Inter + Playfair Display)
Implementation Workflow
Phase 1: Foundation (Start Here)
Create base HTML structure with design system
Build navigation and table of contents
Create introduction slide
Create disclaimer slide
Build modal/lightbox functionality
Create conclusion slide with 4 proposed directions
Style everything according to design system
Phase 2: Episode Integration (Iterative - We'll Do Together)
For each episode (we'll work one at a time):

I'll provide the episode folder path
You'll integrate images into the episode slide
Arrange images with optimal creative layout
Ensure uniform sizing and spacing
Test modal and download functionality
Confirm animations are smooth
Move to next episode
Success Criteria
The final presentation must make the client feel:

✅ Professional – Studio-grade quality
✅ Clear – Easy to navigate and understand
✅ Confident – High attention to detail
✅ Inspired – Elegant and creative
✅ Trusting – Thoughtful artistic direction
Your First Task
Start with Phase 1: Foundation. Create:

Complete HTML structure with design system
Navigation and smooth scrolling
Introduction slide
Disclaimer slide (with clear what-to-evaluate sections)
Placeholder sections for 7 episodes
Appendix placeholder
Conclusion slide with 4 proposed directions
Modal/lightbox functionality for images
Make it beautiful, professional, and ready for episode content integration.

Important: Use only HTML, CSS, and vanilla JavaScript. Make it self-contained (CDN links are fine for fonts/icons). Ensure smooth, elegant animations throughout.




COPYWRITING:
DONT USE BULLSHIT LANGUAGE.
use normal, straightforward language.
ZERO arrogance/burocratic language.
ZERO VAGUENESS

Begin now.

