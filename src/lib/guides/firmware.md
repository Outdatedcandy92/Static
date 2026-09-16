---
title: Firmware
subtitle: Write the code that drives the radio
order: 5
---

### Firmware

For the firmware, we're going to use CircuitPython along with a library for the RDA5807.

To download the library, go back to the static KiCAD library repository and copy the `RDA5807.py` file into your firmware folder for your project.

![The RDA5807.py library file copied into the project's firmware folder](/guides/media/zen_3WgdDD9L4G-1.png)

Now, in there you can create a `code.py` file and write your actual firmware in it.

### Quick Start

```python
from rda5807 import RDA5807

radio = RDA5807()
radio.set_volume(10)
radio.tune(99.5)       # tune directly to 99.5 MHz
```

That's enough to get audio out of the chip's LOUT/ROUT pins.

### API Reference

`RDA5807(i2c=None, band=BAND_87_108, space=SPACE_100K)`

Creates the radio object and powers up the chip. Instantiating this class sends the initial power-up/configuration sequence to the chip, so it must succeed before you call any other method.

|Parameter|Description|
|---|---|
|`i2c`|An existing `busio.I2C` instance. If omitted, one is created automatically on `board.SCL` / `board.SDA` at 100 kHz. Pass your own if you're sharing the I2C bus with other devices.|
|`band`|Which frequency range the chip should tune within. See [Band constants](#band-constants). Default `BAND_87_108` (87–108 MHz, US/Europe).|
|`space`|Channel spacing used when converting between frequency and the chip's internal channel number. See [Space constants](#space-constants). Default `SPACE_100K`.|

Raises `OSError` if the chip doesn't respond on the I2C bus (wrong wiring, or wrong address, see [Troubleshooting](#troubleshooting)).

---

### `tune(freq_mhz, timeout=1.0)`

Tunes directly to a given frequency, in MHz (e.g. `99.5`).

Blocks until the chip reports the tune operation complete, or until `timeout` seconds have passed. Frequencies are rounded to the nearest valid channel for the current `space` setting.

```python
radio.tune(101.1)
```

---

### `seek(up=True, timeout=3.0)`

Scans automatically for the next station.

|Parameter|Description|
|---|---|
|`up`|`True` to scan upward in frequency, `False` to scan downward.|
|`timeout`|Maximum seconds to wait for the seek to finish.|

Returns the frequency (in MHz) of the station found, or `None` if the seek failed or timed out.

```python
found = radio.seek(up=True)
if found:
    print("Found station at", found, "MHz")
else:
    print("No station found")
```

---

### `set_volume(level)`

Sets output volume. `level` is an integer from `0` (muted) to `15` (maximum). The chip's volume scale is logarithmic.

```python
radio.set_volume(15)
```

---

### `set_mono(mono)`

Forces mono playback when `mono=True`, or allows stereo when `mono=False` (the default). Forcing mono can reduce noise on weak signals.

```python
radio.set_mono(True)
```

---

### `read_status()`

Reads the chip's current tuning/signal status and returns a dictionary:

|Key|Type|Meaning|
|---|---|---|
|`stc`|`bool`|Seek/tune operation complete|
|`seek_fail`|`bool`|Last seek failed to find a station|
|`stereo`|`bool`|Currently receiving in stereo|
|`channel`|`int`|Raw internal channel number|
|`freq_mhz`|`float`|Current frequency, in MHz|
|`rssi`|`int`|Signal strength, 0 (weak) – 127 (strong)|
|`fm_true`|`bool`|Chip believes the current channel is an actual station|
|`fm_ready`|`bool`|Chip is ready|
|`rds_ready`|`bool`|New RDS data is available (not yet decoded by this library)|

```python
status = radio.read_status()
print(status["freq_mhz"], "MHz, RSSI:", status["rssi"])
```

## Constants

### Band constants

|Constant|Range|
|---|---|
|`BAND_87_108`|87–108 MHz (US/Europe)|
|`BAND_76_91`|76–91 MHz (Japan)|
|`BAND_76_108`|76–108 MHz (worldwide)|

### Space constants

|Constant|Channel spacing|
|---|---|
|`SPACE_100K`|100 kHz|
|`SPACE_200K`|200 kHz|
|`SPACE_50K`|50 kHz|
|`SPACE_25K`|25 kHz|

Pass these to the `RDA5807()` constructor if you're outside the US/Europe FM band, e.g. `RDA5807(band=BAND_76_91)` for Japan.