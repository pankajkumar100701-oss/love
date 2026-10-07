# Image prompts

Generate each image in ChatGPT, Gemini, Midjourney or similar, then save it in `public/images/` with the exact file name shown (`.jpg`, `.png` or `.webp` all work). Missing images fall back to the built-in illustration, so add them one at a time.

After adding images: `next dev` picks them up on refresh; for production run `npm run build` again.

## Shared style

Add this to the end of every prompt so the set looks consistent:

> Soft natural daylight, calm and serene mood, muted sage green, warm cream and terracotta palette, gentle film grain, editorial photography, shallow depth of field, no text, no logos, no visible faces.

---

## Home page

| File | Shape | Prompt |
| --- | --- | --- |
| `hero.jpg` | Portrait 4:5 (e.g. 1024×1280) | A peaceful therapy room corner: a linen armchair, a large potted monstera, a wooden side table with a ceramic cup of tea, sheer curtains glowing with morning light. |
| `therapist.jpg` | Square 1:1 | **Use a real photo of the actual therapist. Do not use an AI-generated person.** |

## Therapy pages — `public/images/therapies/`

Landscape 16:9 (e.g. 1600×900). Shown on the therapy cards and at the top of each therapy page.

| File | Prompt |
| --- | --- |
| `individual-therapy.jpg` | Two armchairs facing each other in a sunlit room, a box of tissues and a notebook on a low table between them. |
| `couples-therapy.jpg` | Two coffee mugs side by side on a windowsill, steam rising, two hands about to touch, seen from behind and cropped. |
| `family-therapy.jpg` | A cosy living room floor with a woven rug, scattered cushions and children's wooden toys, warm afternoon light. |
| `child-teen-therapy.jpg` | A low table with crayons, watercolour paper with a colourful drawing, and a small potted plant, playful but calm. |
| `group-therapy.jpg` | A circle of mismatched chairs in a bright, airy studio with plants and wooden floors, empty and inviting. |
| `cbt.jpg` | An open journal with handwritten notes and a pen on a wooden desk, a glass of water and a sprig of eucalyptus. |
| `dbt.jpg` | Smooth river stones carefully balanced in a cairn beside calm water at dawn. |
| `emdr.jpg` | Gentle ripples spreading across a still lake, soft mist, a single leaf floating. |
| `act.jpg` | A narrow forest path winding forward through tall green ferns, sunbeams breaking through. |
| `psychodynamic-therapy.jpg` | Close-up of old tree roots spreading over mossy ground, rich textures, soft light. |
| `mindfulness-therapy.jpg` | A meditation cushion on a wooden floor beside a window, a single candle and a small bowl of water. |
| `grief-counselling.jpg` | A single white flower resting on a soft linen cloth, a lit candle in the background, tender and quiet. |
| `hypnotherapy.jpg` | A slow spiral of soft light in a calm, dim room, dreamy long exposure, peaceful rather than dramatic. |
| `past-life-regression.jpg` | An antique hourglass on an old wooden table with golden sand falling, sunlight through a window. |
| `between-lives-regression.jpg` | A vast, soft sky at dusk with luminous clouds and a faint path of light, ethereal and serene. |
| `reiki.jpg` | Cupped open hands held above a resting body draped in a linen blanket, soft glowing light, faces not visible. |
| `spiritual-guidance.jpg` | Oracle cards fanned out on a linen cloth with dried flowers, a crystal and a candle. |
| `art-therapy.jpg` | Paint brushes, a palette of soft watercolours and a half-finished abstract painting on a sunlit table. |
