import os
from PIL import Image

img_path = r"C:\Users\Bala\.gemini\antigravity-ide\brain\630cf832-51e3-4bf3-b0ed-bd1db53db657\media__1781878886711.jpg"
img = Image.open(img_path)
width, height = img.size

# Find red pixels (e.g., R > 200, G < 50, B < 50)
red_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b = img.getpixel((x, y))
        if r > 200 and g < 60 and b < 60:
            red_pixels.append((x, y))

# Group pixels into clusters (each cluster is a red dot)
clusters = []
for p in red_pixels:
    # Find if it belongs to an existing cluster
    added = False
    for c in clusters:
        # If close to any pixel in the cluster
        if abs(p[0] - c[0][0]) < 20 and abs(p[1] - c[0][1]) < 20:
            c.append(p)
            added = True
            break
    if not added:
        clusters.append([p])

print(f"Image size: {width}x{height}")
print(f"Found {len(clusters)} clusters:")
for i, c in enumerate(clusters):
    # Compute centroid of cluster
    cx = sum(p[0] for p in c) / len(c)
    cy = sum(p[1] for p in c) / len(c)
    pct_x = (cx / width) * 100
    pct_y = (cy / height) * 100
    print(f"Cluster {i+1}: centroid=({cx:.1f}, {cy:.1f}), pct=({pct_x:.2f}%, {pct_y:.2f}%)")
