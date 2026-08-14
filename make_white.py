from PIL import Image

def make_white(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        data = img.getdata()
        new_data = []
        
        for item in data:
            if item[3] > 0:
                new_data.append((255, 255, 255, item[3]))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {image_path} to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_white("src/assets/vexa_logo_transparent.png", "public/vexa_favicon_blanco.png")
