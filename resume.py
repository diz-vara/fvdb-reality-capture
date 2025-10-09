# Copyright Contributors to the OpenVDB Project
# SPDX-License-Identifier: Apache-2.0
#
import logging
import pathlib
import time

import torch
import tyro

from fvdb_reality_capture.training import SceneOptimizationRunner


def main(
    checkpoint_path: pathlib.Path,
    override_results_path: pathlib.Path | None = None,
    device: str | torch.device = "cuda",
    disable_viewer: bool = False,
    log_tensorboard_every: int = 100,
    log_images_to_tensorboard: bool = False,
    save_eval_images: bool = False,
):
    logging.basicConfig(level=logging.INFO, format="%(levelname)s : %(message)s")

    runner = SceneOptimizationRunner.from_checkpoint(
        checkpoint_path=checkpoint_path,
        override_results_path=override_results_path,
        log_tensorboard_every=log_tensorboard_every,
        log_images_to_tensorboard=log_images_to_tensorboard,
        save_eval_images=save_eval_images,
        device=device,
    )

    runner.train()

    logger = logging.getLogger(__name__)
    if not disable_viewer:
        logger.info("Viewer running... Ctrl+C to exit.")
        time.sleep(1000000)


if __name__ == "__main__":
    tyro.cli(main)
