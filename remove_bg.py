from PIL import Image

def make_white_transparent(image_path, output_path, tolerance=220):
    try:
        img = Image.open(image_path).convert("RGBA")
        data = img.getdata()
        new_data = []
        
        for item in data:
            if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {image_path} to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_white_transparent("src/assets/vexa logo.png", "src/assets/vexa_logo_transparent.png")
