import { useEffect, useState, useRef } from "react";

const InteractiveBackground = () => {
  const [shapes, setShapes] = useState([]);
  const shapesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    // Generate 100 shapes with wandering behavior
    const initShapes = () => {
      const w = window.innerWidth;
      const h = 6000;

      const colors = [
        "blue",
        "orange",
        "purple",
        "cyan",
        "teal",
        "pink",
        "indigo",
        "emerald",
      ];
      const types = ["circle", "square", "roundRect"];
      const initialShapes = [];

      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 180 + 120;
        const x = Math.random() * (w - 300) + 150;
        const y = Math.random() * h;

        initialShapes.push({
          id: i,
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 2, // Random initial velocity
          vy: (Math.random() - 0.5) * 2,
          size: size,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1.2,
          // Wandering behavior
          wanderAngle: Math.random() * Math.PI * 2,
          wanderRadius: 100 + Math.random() * 100, // How far they wander
          maxSpeed: 1 + Math.random() * 2, // Max wandering speed
        });
      }

      shapesRef.current = initialShapes;
      setShapes([...initialShapes]);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.pageX;
      mouseRef.current.y = e.pageY;
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = Math.max(document.documentElement.scrollHeight, 6000);

      shapesRef.current.forEach((shape) => {
        // WANDERING BEHAVIOR - steering force
        shape.wanderAngle += (Math.random() - 0.5) * 0.5; // Random direction change

        const wanderX = Math.cos(shape.wanderAngle) * shape.wanderRadius;
        const wanderY = Math.sin(shape.wanderAngle) * shape.wanderRadius;

        // Target position for wandering
        const targetX = shape.x + wanderX;
        const targetY = shape.y + wanderY;

        // Steer towards wander target
        const dx = targetX - shape.x;
        const dy = targetY - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
          shape.vx += (dx / distance) * 0.2;
          shape.vy += (dy / distance) * 0.2;
        }

        // CURSOR DISPLACEMENT
        const cursorDx = mouseRef.current.x - shape.x;
        const cursorDy = mouseRef.current.y - shape.y;
        const cursorDist = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy);
        const maxDistance = 250;

        if (cursorDist < maxDistance && cursorDist > 0) {
          const force = (maxDistance - cursorDist) / maxDistance;
          const angle = Math.atan2(cursorDy, cursorDx);

          shape.vx -= Math.cos(angle) * force * 8;
          shape.vy -= Math.sin(angle) * force * 8;
        }

        // Gentle pull towards base area (loose boundary)
        const baseDistance = Math.sqrt(
          Math.pow(shape.x - shape.baseX, 2) +
            Math.pow(shape.y - shape.baseY, 2)
        );

        if (baseDistance > 400) {
          // Only pull if too far
          const pullStrength = (baseDistance - 400) * 0.0005;
          shape.vx += (shape.baseX - shape.x) * pullStrength;
          shape.vy += (shape.baseY - shape.y) * pullStrength;
        }

        // Limit max speed
        const speed = Math.sqrt(shape.vx * shape.vx + shape.vy * shape.vy);
        if (speed > shape.maxSpeed) {
          shape.vx = (shape.vx / speed) * shape.maxSpeed;
          shape.vy = (shape.vy / speed) * shape.maxSpeed;
        }

        // Damping
        shape.vx *= 0.95;
        shape.vy *= 0.95;

        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;

        // Bounce off screen edges
        if (shape.x < shape.size) {
          shape.x = shape.size;
          shape.vx = Math.abs(shape.vx);
        }
        if (shape.x > w - shape.size) {
          shape.x = w - shape.size;
          shape.vx = -Math.abs(shape.vx);
        }
        if (shape.y < shape.size) {
          shape.y = shape.size;
          shape.vy = Math.abs(shape.vy);
        }
        if (shape.y > h - shape.size) {
          shape.y = h - shape.size;
          shape.vy = -Math.abs(shape.vy);
        }

        // Update rotation
        shape.rotation += shape.rotationSpeed;
      });

      setShapes([...shapesRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initShapes();
    };

    initShapes();
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getColorClasses = (color, isDark = false) => {
    if (isDark) {
      const colors = {
        blue: "border-cyan-400/60 shadow-[0_0_50px_rgba(100,255,218,0.4)]",
        orange: "border-orange-400/60 shadow-[0_0_50px_rgba(255,107,107,0.4)]",
        purple: "border-purple-400/55 shadow-[0_0_50px_rgba(168,85,247,0.4)]",
        cyan: "bg-gradient-to-br from-cyan-500/30 to-blue-600/30 shadow-[0_0_60px_rgba(100,255,218,0.35)]",
        teal: "border-teal-400/55 shadow-[0_0_50px_rgba(20,184,166,0.35)]",
        pink: "border-pink-400/55 shadow-[0_0_50px_rgba(236,72,153,0.35)]",
        indigo: "border-indigo-400/50 shadow-[0_0_45px_rgba(99,102,241,0.35)]",
        emerald:
          "bg-gradient-to-br from-emerald-500/25 to-teal-600/25 shadow-[0_0_60px_rgba(16,185,129,0.3)]",
      };
      return colors[color] || "border-cyan-400/60";
    } else {
      const colors = {
        blue: "border-blue-500/85 shadow-[0_0_30px_rgba(59,130,246,0.6)]",
        orange: "border-orange-500/85 shadow-[0_0_30px_rgba(251,146,60,0.6)]",
        purple: "border-purple-500/80 shadow-[0_0_30px_rgba(168,85,247,0.6)]",
        cyan: "bg-gradient-to-br from-cyan-400/55 to-blue-500/55 shadow-[0_0_35px_rgba(6,182,212,0.5)]",
        teal: "border-teal-500/85 shadow-[0_0_30px_rgba(20,184,166,0.6)]",
        pink: "border-pink-500/85 shadow-[0_0_30px_rgba(236,72,153,0.6)]",
        indigo: "border-indigo-500/80 shadow-[0_0_30px_rgba(99,102,241,0.5)]",
        emerald:
          "bg-gradient-to-br from-emerald-400/50 to-teal-500/50 shadow-[0_0_35px_rgba(16,185,129,0.5)]",
      };
      return colors[color] || "border-blue-500/85";
    }
  };

  return (
    <>
      {/* Light Mode */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none dark:hidden -z-10"
        style={{ minHeight: "100%" }}
      >
        {shapes.map((shape) => {
          const colorClass = getColorClasses(shape.color);
          const isSolid = shape.color === "cyan" || shape.color === "emerald";

          return (
            <div
              key={`light-${shape.id}`}
              className={`absolute ${
                shape.type === "circle"
                  ? "rounded-full"
                  : shape.type === "roundRect"
                  ? "rounded-2xl"
                  : ""
              } ${isSolid ? colorClass : `border-[7px] ${colorClass}`}`}
              style={{
                left: `${shape.x}px`,
                top: `${shape.y}px`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
                willChange: "transform",
              }}
            />
          );
        })}

        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-purple-100/40"></div>
      </div>

      {/* Dark Mode */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none hidden dark:block -z-10"
        style={{ minHeight: "100%" }}
      >
        {shapes.map((shape) => {
          const colorClass = getColorClasses(shape.color, true);
          const isSolid = shape.color === "cyan" || shape.color === "emerald";

          return (
            <div
              key={`dark-${shape.id}`}
              className={`absolute ${
                shape.type === "circle"
                  ? "rounded-full"
                  : shape.type === "roundRect"
                  ? "rounded-2xl"
                  : ""
              } ${isSolid ? colorClass : `border-[6px] ${colorClass}`}`}
              style={{
                left: `${shape.x}px`,
                top: `${shape.y}px`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
                willChange: "transform",
              }}
            />
          );
        })}

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(100, 255, 218, 0.25) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-light/20"></div>

        <div className="absolute top-20 left-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
      </div>
    </>
  );
};

export default InteractiveBackground;
