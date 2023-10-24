import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import amogus from "./amogus.json";

export const Background = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);

	return <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={amogus} />;
};
