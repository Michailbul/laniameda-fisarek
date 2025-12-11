WE are AI filmmaking Studio called Laniameda

We are working on the creative art direction treatment for the project of Lukas Fisarek (in czech language with diacritics)

right now we need to prepare a presentation/slides for him to identify if we are moving in the right direction and to approve the treatment

we need to create an interactive web presentation that will do the following things and would have the following features

<context for the agent>
its a TV documentary drama about domestic violence. 
the Live action part is already shot and approved by the client
It looks as a series of interview/podcasts
our goal is to deliver B rolls using AI generated footage.

the initial plan was to use illustration/sketch stylistic approach/
to start with colorful color palette and move to dramattic at the end of the drama
</context for the agent>

1) Explain the purpose of this presentation
PURPOSE: to choose the creative direction, and answer on this questions
a)do we use the original style or experiement with new ones
b) if experiment with new styles, do we choose one style and lock it or we use different styles for different scenes
c) Faces of the characters: present or absent
d) Style-Animation/Realistic.
e) Abstract Art/concept art -yes or no
f) quantity of B rolls
g) proposed multiple options to choose from.

we should have a disclaimer, that the provided snippets of shots are only as a rough draft and direction examples
what to look for - 
- color palete and style of the animation,
- camera angles,
- storytelling elements,
- whether the episode is worth telling.
- creative direction
what to NOT look at 
- consistency (will be handled in the next round of the process)
- shots can be iterated and changed on demand
- the shots are not final and serve more as a reference

2) then we will go through the 5 scenes
each scene is a seperate slide (1-2 slide per scene)



3) the main idea of the presentation is to develop it as an interactive web demo. For now use HTML only


4) It should be very simple and easy to understand for the client, easy to go through

5) explain, that the style of each shot may be changed for the one we decide to proceed with

6) The Intro should be a "table of contents"
- Intro/purpose of the presnetation
- Disclaimer
- Episode 1 - Relationshp origin. HoneyMoon phase
- Episode 2 - Deep dive (clif scene)
- Episode 3 - Mountain Retreat scene
- Episode 4 - Surveillance scene 
- Episode 5 - Misa at theater scene
- Episode 6 - nightmare scene 
- Episode 7 - Murder scene
- appendix - Concept art character direction
Here we explore different directions of the character personas (a few examples)
- Conclusion and proposed thoughs/proposed directions


Proosed Directions
1) lock in the animation style with colors at the beginning, evolve it into the black and white realism at the end as the drama develops.
As if the story starts with the colorful/dreamy world and ends up in the brutal dramatic reality of the world.
2) iterate styles, for every B roll different one. Keep the character faces not shown. But keep unique identifiers so that characters are easy recognized accross different styles

3) lock in realism style and show the Ultra realistic footages.Show the face only of the Simona. keep the face of Boris out of frame (increase the dramatic impact of the movie)

4) lock in concept art style/animation sketch style, not show any faces, keep the characters and scene abstract/artistic



# DESIGN
The presentation should HAVE SLEEK ARTISTIC GREAT DESIGN. in the first prompt i will share you the inspireation pages.
Use the design system this - and enhance it to be creative. 


keep the spacings, margins. smooth animations
<design system>
Design System Documentation
This document outlines the design system extracted from the portfolio-second project. It covers typography, color palette, core UI components, and common styling patterns used throughout the application.

1. Technology Stack
Styling Engine: Tailwind CSS (v3.x via CDN configuration)
Component Library: Custom + Primitives based on Radix UI (implied by slot dependency) / Shadcn UI structure.
Animations: Framer Motion + Native CSS Keyframes.
Icons: Lucide React.
Fonts: Google Fonts.
2. Typography
The system uses a pairing of a modern geometric sans-serif and a classic serif for elegance.

Font Families
Primary (Sans): Inter

Usage: UI text, body copy, navigation.
Variable Weights: 200, 300, 400, 500, 600.
CSS Class: font-sans
Secondary (Serif): Playfair Display

Usage: Headings, emphasis, editorial touches.
Weights: 400, 600 (Normal & Italic).
CSS Class: font-serif
Type Scale & Utility
The project relies on standard Tailwind type scales (e.g., text-xs, text-sm, text-3xl).

Navigation: text-xs to text-sm, Uppercase, Tracking-wider.
Mobile Menu Links: text-3xl, font-light, tracking-tight.
3. Color Palette
The application uses a strict Dark Mode theme with high contrast white text and subtle zinc/gray accents.

Core Colors
Token Name	Value	Usage
Background	#000000	Main page background.
Foreground	#ffffff	Primary text color.
Primary	#ffffff	Primary actions and highlights.
Neutrals (Zinc Extended)
Token Name	Value	Description
Zinc-850	#1f1f22	Dark gray for surface differentiation.
Zinc-950	#09090b	Deep black-blue, likely for card backgrounds or footers.
Muted	rgba(255,255,255,0.1)	Subtle text, inactive states.
UI Colors
Token Name	Value	Description
Border	rgba(255,255,255,0.1)	Subtle borders for cards and dividers.
4. Visual Styles & Effects
Glassmorphism
The design heavily relies on glassmorphism to create depth on the dark background.

Backgrounds: bg-black/40, bg-white/5
Blur: backdrop-blur-md, backdrop-blur-xl, backdrop-blur-3xl
Borders: border-white/10, border-white/20
Shadows: shadow-orbital (custom glow effect).
Utility Class: .glass-button

Background: Linear Gradient (White 15% -> White 5%)
Border: 1px solid White/20
Shadow: 0 8px 32px rgba(0,0,0,0.2)
Hover: Brigher background + translateY(-2px).
Animations
Custom keyframe animations defined in 
globals.css
:

Pulse: Standard opacity pulse.
Pulse Slow: 6s duration (custom tailwind config).
Ping: Scaling and fading ring.
Gradient: Animated background gradient (3s infinite).
Transitions:

Standard ease: cubic-bezier(0.4, 0, 0.2, 1)
Duration: 300ms, 500ms, 700ms, 1000ms.
5. UI Components
Button Patterns
Glass Button: See "Visual Styles".
Navigation Pill:
Inactive: text-zinc-400
Active: text-black with white background pill (Framer Motion layoutId).
Action Button (Connect):
bg-white text-black
Rounded Full
Hover: Scale 105.
Cards
Follows the Card primitive structure:

rounded-lg
border bg-card text-card-foreground shadow-sm
Composition: Header, Title, Description, Content, Footer.
Navigation
Fixed Navbar: Transitions from transparent to bg-black/40 backdrop-blur-xl on scroll.
Mobile Menu: Fullscreen overlay (fixed inset-0) with bg-black/95 backdrop-blur-3xl.
Layout
Container: max-w-7xl mx-auto px-6 md:px-12
Scroll: Smooth scrolling enabled globally.
6. Iconography
Library: lucide-react
Style: Outlined, clean strokes.



soft, clean, smooth animations is a must.
it should be a professional web design, where creativity, art meets innovation and technology
</design system>



THE EPISODE SCENES MUST INCLUIDE THE PHOTOS.
we will follow in the followin manner:
in the repository i will create a folder for each episode, where i will include every photo
we will work step by step, episode after episode to approch each episode in a custom format. i will share with you the screenshots of the canva draft layout. You will take the images from the folder and make sure to put them in a appropriate order, so that they occupy the right amount of space, creatively. they should all have the same dimensain.sizes, but some pages where there are only a few amounts of photos may have different sizes/
the goal is so that the page that showcasing the shots looks perfect, beautiful.

- the shots and images must be clickable so that they expand as a pop over modal element, must be downloadable - include icon to downlaod the shot.

<tasks>

1) create the outline and intro, preambules, design system style etc.
2) once we complete the "non episodic" pages slides, we then start adding each episode step by step, by looking at the pictures at the repository folder respectively, and integrating it into the web presentation


</tasks>


the website should feature the "Laniameda" at the corner of the page. 

overall the experience of the interaction with the web presnetation must end user wtih the feeling of professionalism,. high ownership, attention to details, elegance, and creativity. 


COPYWRITING:
DONT USE BULLSHIT LANGUAGE.
use normal, straightforward language.
ZERO arrogance/burocratic language.
ZERO VAGUENESS




action poinst / suggestions 