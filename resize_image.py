from PIL import Image
import sys

src = 'profile2.png'
dst = 'profile2-480x600.png'
size = (480, 600)

try:
    img = Image.open(src)
except FileNotFoundError:
    print(f"Source image not found: {src}")
    sys.exit(1)

print('Original size:', img.size)
# Resize preserving aspect ratio to fit within size
img.thumbnail(size, Image.LANCZOS)
print('Resized size:', img.size)
img.save(dst, optimize=True, quality=90)
print('Saved:', dst)
